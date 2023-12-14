import type { TipData } from '$/commonTypesWithClient/models';
import { redisClient } from '$/service/redisClient';
import type { PayPayData } from '$/useCase/paypayUseCase';

export const savePayPayDataToRedis = async (key: string, value: PayPayData) => {
  const expiryInSeconds = 24 * 60 * 60;
  await redisClient.set(key, JSON.stringify(value), {
    EX: expiryInSeconds,
  });
};

export const getPayPayDataFromRedis = async (key: string): Promise<TipData | null> => {
  const data = await redisClient.get(key);
  if (data === null) {
    return null;
  }
  const tipdata: TipData = JSON.parse(data);
  return tipdata;
};
