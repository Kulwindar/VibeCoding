import { Schema, Document } from 'mongoose';

export interface IExpenseLineItem {
  category: string;
  amount: number;
  currency: string;
  date: Date;
  merchant: string;
  receipt?: string;
  policyCompliant: boolean;
  violationReason?: string;
}

export interface IExpenseReport extends Document {
  employeeId: Schema.Types.ObjectId;
  tripId?: Schema.Types.ObjectId;
  lineItems: IExpenseLineItem[];
  totalAmount: number;
  status: 'draft' | 'submitted' | 'pending_approval' | 'approved' | 'rejected' | 'paid';
  createdAt: Date;
  updatedAt: Date;
}

const LineItemSchema = new Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },
  currency: { type: String, required: true, default: 'USD' },
  date: { type: Date, required: true },
  merchant: { type: String, required: true },
  receipt: { type: String },
  policyCompliant: { type: Boolean, default: true },
  violationReason: { type: String },
});

const ExpenseReportSchema = new Schema<IExpenseReport>(
  {
    employeeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tripId: { type: Schema.Types.ObjectId, ref: 'Trip' },
    lineItems: [LineItemSchema],
    totalAmount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['draft', 'submitted', 'pending_approval', 'approved', 'rejected', 'paid'],
      default: 'draft',
    },
  },
  { timestamps: true },
);

// Indexes
ExpenseReportSchema.index({ employeeId: 1 });
ExpenseReportSchema.index({ tripId: 1 });
ExpenseReportSchema.index({ status: 1 });

export const ExpenseReport = require('mongoose').model<IExpenseReport>(
  'ExpenseReport',
  ExpenseReportSchema,
);
