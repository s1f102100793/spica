import { createClient } from 'redis';
import { REDIS_PASSWORD, REDIS_URL } from './envValues';

export const redisClient = createClient({
  url: REDIS_URL,
  password: REDIS_PASSWORD,
});

redisClient.on('error', (err) => {
  console.error('Redis Error:', err);
});
