import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { TripService } from './trip.service.js';

const tripService = new TripService();

export async function registerTripRoutes(app: FastifyInstance) {
  // TODO: Implement trip request endpoints
  // POST /api/v1/trips - Create trip request
  // GET /api/v1/trips/:id - Get trip details
  // GET /api/v1/trips - List employee trips
  // PUT /api/v1/trips/:id - Update trip (approver only)
}
