import server from '$/$server';
import { API_BASE_PATH } from '$/service/envValues';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import type { FastifyServerFactory } from 'fastify';
import Fastify from 'fastify';

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory });
  app.register(helmet);
  app.register(cors, { origin: 'https://spica-develop.vercel.app', credentials: true });
  app.register(cookie);
  server(app, { basePath: API_BASE_PATH });

  return app;
};