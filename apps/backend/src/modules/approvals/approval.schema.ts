import { Schema, Document } from 'mongoose';

export interface IApprovalRequest extends Document {
  reportId: Schema.Types.ObjectId;
  approverId: Schema.Types.ObjectId;
  status: 'pending' | 'approved' | 'rejected' | 'sent_back';
  approvalLevel: number; // 1 = Manager, 2 = Finance
  comments?: string;
  actionedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ApprovalRequestSchema = new Schema<IApprovalRequest>(
  {
    reportId: { type: Schema.Types.ObjectId, ref: 'ExpenseReport', required: true },
    approverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'sent_back'],
      default: 'pending',
    },
    approvalLevel: { type: Number, required: true },
    comments: { type: String },
    actionedAt: { type: Date },
  },
  { timestamps: true },
);

// Indexes
ApprovalRequestSchema.index({ reportId: 1 });
ApprovalRequestSchema.index({ approverId: 1 });
ApprovalRequestSchema.index({ status: 1 });
ApprovalRequestSchema.index({ createdAt: -1 });

export const ApprovalRequest = require('mongoose').model<IApprovalRequest>(
  'ApprovalRequest',
  ApprovalRequestSchema,
);
