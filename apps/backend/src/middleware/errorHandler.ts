import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { logger } from '../lib/logger.js';

export async function errorHandler(
  error: any,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  logger.error({
    err: error,
    requestId: request.id,
    method: request.method,
    url: request.url,
  });

  const statusCode = error.statusCode || 500;
  const code = error.code || 'INTERNAL_SERVER_ERROR';
  const message = error.message || 'An unexpected error occurred';

  reply.status(statusCode).send({
    error: {
      code,
      message,
      requestId: request.id,
      ...(process.env.NODE_ENV === 'development' && { details: error.stack }),
    },
  });
}
