import { Schema, Document } from 'mongoose';

export interface IReimbursement extends Document {
  reportId: Schema.Types.ObjectId;
  employeeId: Schema.Types.ObjectId;
  amount: number;
  currency: string;
  status: 'processing' | 'paid' | 'failed';
  paymentReference?: string;
  paymentDate?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReimbursementSchema = new Schema<IReimbursement>(
  {
    reportId: { type: Schema.Types.ObjectId, ref: 'ExpenseReport', required: true },
    employeeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true, min: 0 },
    currency: { type: String, required: true, default: 'USD' },
    status: {
      type: String,
      enum: ['processing', 'paid', 'failed'],
      default: 'processing',
    },
    paymentReference: { type: String },
    paymentDate: { type: Date },
    notes: { type: String },
  },
  { timestamps: true },
);

// Indexes
ReimbursementSchema.index({ employeeId: 1 });
ReimbursementSchema.index({ status: 1 });
ReimbursementSchema.index({ createdAt: -1 });

export const Reimbursement = require('mongoose').model<IReimbursement>(
  'Reimbursement',
  ReimbursementSchema,
);
