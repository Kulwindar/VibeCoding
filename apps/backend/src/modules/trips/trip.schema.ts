import { Schema, Document } from 'mongoose';

export interface ITrip extends Document {
  employeeId: Schema.Types.ObjectId;
  destination: string;
  startDate: Date;
  endDate: Date;
  purpose: string;
  estimatedBudget: number;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  approverComments?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TripSchema = new Schema<ITrip>(
  {
    employeeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    purpose: { type: String, required: true },
    estimatedBudget: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'cancelled'],
      default: 'pending',
    },
    approverComments: { type: String },
  },
  { timestamps: true },
);

// Indexes
TripSchema.index({ employeeId: 1 });
TripSchema.index({ status: 1 });
TripSchema.index({ createdAt: -1 });

export const Trip = require('mongoose').model<ITrip>('Trip', TripSchema);
