import { FastifyInstance } from 'fastify';
import { registerSchema, loginSchema } from './user.routes.js';
import { userController } from './user.controller.js';

export async function registerUserRoutes(app: FastifyInstance) {
  app.post('/api/v1/auth/register', {
    schema: {
      description: 'Register a new user',
      tags: ['Auth'],
      body: registerSchema,
      response: {
        201: {
          description: 'User registered successfully',
        },
      },
    },
  }, (request, reply) => userController.register(request, reply));

  app.post('/api/v1/auth/login', {
    schema: {
      description: 'Login user',
      tags: ['Auth'],
      body: loginSchema,
      response: {
        200: {
          description: 'Login successful',
        },
      },
    },
  }, (request, reply) => userController.login(request, reply));

  app.get(
    '/api/v1/auth/profile',
    {
      schema: {
        description: 'Get user profile',
        tags: ['Auth'],
        response: {
          200: {
            description: 'User profile retrieved',
          },
        },
      },
      onRequest: [app.authenticate],
    },
    (request, reply) => userController.getProfile(request, reply),
  );

  app.post(
    '/api/v1/auth/logout',
    {
      schema: {
        description: 'Logout user',
        tags: ['Auth'],
        response: {
          200: {
            description: 'Logged out successfully',
          },
        },
      },
      onRequest: [app.authenticate],
    },
    (request, reply) => userController.logout(request, reply),
  );
}
