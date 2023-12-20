import server from '$/$server';
import { API_BASE_PATH, CORS_ORIGIN } from '$/service/envValues';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import type { FastifyServerFactory } from 'fastify';
import Fastify from 'fastify';

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory });
  app.register(helmet);
  app.register(cors, {
    origin: (origin, callback) => {
      if (origin === null || origin === undefined) {
        callback(null, true); // オリジンがない場合は許可
      } else if (CORS_ORIGIN && origin.startsWith(CORS_ORIGIN)) {
        callback(null, true); // 指定されたオリジンがCORS_ORIGINで始まる場合は許可
      } else {
        callback(new Error('Not allowed by CORS'), false); // それ以外の場合は不許可
      }
    },
    credentials: true,
  });
  app.register(cookie);
  server(app, { basePath: API_BASE_PATH });

  return app;
};
