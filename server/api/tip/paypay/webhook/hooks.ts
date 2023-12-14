import { getPayPayDataFromRedis } from '$/repository/redisRepository';
import { createTipData } from '$/repository/tipRepository';
import { defineHooks } from './$relay';

interface PayPayWebhookBody {
  notification_type: string;
  store_id: string | null;
  paid_at: string;
  expires_at: string | null;
  merchant_order_id: string;
  pos_id: string;
  order_amount: string;
  merchant_id: string;
  state: string;
  order_id: string;
  authorized_at: string | null;
}

export default defineHooks(() => ({
  preHandler: async (req, reply, done) => {
    const webhookData = req.body as PayPayWebhookBody;
    const merchantOrderId = webhookData.merchant_order_id;
    const tipData = await getPayPayDataFromRedis(merchantOrderId);
    if (tipData === null) {
      reply.status(404).send();
      return;
    }
    await createTipData(tipData, webhookData.order_amount);
    done();
  },
}));
