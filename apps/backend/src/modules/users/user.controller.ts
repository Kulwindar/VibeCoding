import { FastifyRequest, FastifyReply } from 'fastify';
import { userService } from './user.service.js';
import { RegisterInput, LoginInput } from './user.routes.js';
import { logger } from '../../lib/logger.js';

export class UserController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as RegisterInput;
      const user = await userService.register(
        body.email,
        body.password,
        body.firstName,
        body.lastName,
        body.department,
      );

      const token = request.server.jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
      });

      return reply.code(201).send({
        success: true,
        data: {
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            department: user.department,
          },
          token,
        },
      });
    } catch (error) {
      logger.error({ error }, 'Register error');
      return reply.code(400).send({
        success: false,
        error: (error as Error).message,
      });
    }
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as LoginInput;
      const user = await userService.login(body.email, body.password);

      if (!user) {
        return reply.code(401).send({
          success: false,
          error: 'Invalid email or password',
        });
      }

      const token = request.server.jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
      });

      return reply.code(200).send({
        success: true,
        data: {
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            department: user.department,
          },
          token,
        },
      });
    } catch (error) {
      logger.error({ error }, 'Login error');
      return reply.code(500).send({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  async getProfile(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userId = (request.user as any).id;
      const user = await userService.getUser(userId);

      if (!user) {
        return reply.code(404).send({
          success: false,
          error: 'User not found',
        });
      }

      return reply.code(200).send({
        success: true,
        data: {
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            department: user.department,
          },
        },
      });
    } catch (error) {
      logger.error({ error }, 'Get profile error');
      return reply.code(500).send({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  async logout(request: FastifyRequest, reply: FastifyReply) {
    // JWT doesn't require server-side logout, but we can add token blacklisting if needed
    return reply.code(200).send({
      success: true,
      message: 'Logged out successfully',
    });
  }
}

export const userController = new UserController();
