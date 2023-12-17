import type { TipData } from '$/commonTypesWithClient/models';
import { redisRepository } from '$/repository/redisRepository';
import { tipRepository } from '$/repository/tipRepository';
import { defineHooks } from './$relay';

interface PayPayWebhookBody {
  notification_type: string;
  store_id: string | null;
  paid_at: string;
  expires_at: string | null;
  merchant_order_id: string;
  pos_id: string;
  order_amount: number;
  merchant_id: string;
  state: string;
  order_id: string;
  authorized_at: string | null;
}

export default defineHooks(() => ({
  preHandler: async (req, reply, done) => {
    const paypayWebhookData = req.body as PayPayWebhookBody;
    const merchantOrderId = paypayWebhookData.merchant_order_id;
    const tipData = await redisRepository.get(merchantOrderId);
    if (tipData === null) {
      reply.status(404).send();
      return;
    }
    const updateTipData: TipData = JSON.parse(tipData);
    await tipRepository.save(updateTipData, paypayWebhookData.order_amount);
    done();
  },
}));
