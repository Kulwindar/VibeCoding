import { User, IUser } from './user.schema.js';
import { logger } from '../../lib/logger.js';

export class UserService {
  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    department: string,
    role: string = 'employee',
  ): Promise<IUser> {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Email already registered');
      }

      const user = new User({
        email,
        password,
        firstName,
        lastName,
        department,
        role,
      });

      await user.save();
      logger.info({ email }, 'User registered successfully');
      return user;
    } catch (error) {
      logger.error({ error }, 'Error registering user');
      throw error;
    }
  }

  async login(email: string, password: string): Promise<IUser | null> {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        logger.warn({ email }, 'Login attempt with non-existent email');
        return null;
      }

      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        logger.warn({ email }, 'Login attempt with invalid password');
        return null;
      }

      logger.info({ email }, 'User logged in successfully');
      return user;
    } catch (error) {
      logger.error({ error }, 'Error during login');
      throw error;
    }
  }

  async getUser(userId: string): Promise<IUser | null> {
    try {
      const user = await User.findById(userId).select('-password');
      return user;
    } catch (error) {
      logger.error({ error }, 'Error fetching user');
      throw error;
    }
  }

  async updateUser(userId: string, updates: Partial<IUser>): Promise<IUser | null> {
    try {
      const user = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');
      return user;
    } catch (error) {
      logger.error({ error }, 'Error updating user');
      throw error;
    }
  }

  async getAllUsers(): Promise<IUser[]> {
    try {
      const users = await User.find({ isActive: true }).select('-password');
      return users;
    } catch (error) {
      logger.error({ error }, 'Error fetching users');
      throw error;
    }
  }
}

export const userService = new UserService();
