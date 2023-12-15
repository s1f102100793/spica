import { redisClient } from '$/service/redisClient';

export const redisRepository = {
  save: async (key: string, value: string, expiryInSeconds: number) => {
    await redisClient.set(key, value, {
      EX: expiryInSeconds,
    });
  },
  get: async (key: string): Promise<string | null> => {
    const data = await redisClient.get(key);
    if (data === null) {
      return null;
    }
    return data;
  },
};
