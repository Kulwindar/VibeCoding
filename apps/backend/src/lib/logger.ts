import pino from 'pino';
import { config } from '../config/env.js';

const level = config.app.nodeEnv === 'production' ? 'info' : 'debug';

export const logger = pino({
  level,
  transport:
    config.app.nodeEnv === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            levelFirst: true,
            singleLine: false,
          },
        }
      : undefined,
});
