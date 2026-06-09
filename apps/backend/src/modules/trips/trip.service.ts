import { Trip, ITrip } from './trip.schema.js';
import { CreateTripInput } from './trip.routes.js';

export class TripService {
  async createTrip(employeeId: string, data: CreateTripInput): Promise<ITrip> {
    const trip = new Trip({
      employeeId,
      ...data,
    });
    return trip.save();
  }

  async getTripById(tripId: string): Promise<ITrip | null> {
    return Trip.findById(tripId).lean();
  }

  async getTripsByEmployee(employeeId: string): Promise<ITrip[]> {
    return Trip.find({ employeeId }).lean();
  }

  async updateTripStatus(tripId: string, status: string, comments?: string): Promise<ITrip | null> {
    return Trip.findByIdAndUpdate(
      tripId,
      { status, approverComments: comments },
      { new: true },
    ).lean();
  }
}
