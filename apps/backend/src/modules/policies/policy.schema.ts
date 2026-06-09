import { Schema, Document } from 'mongoose';

export interface IPolicyRule extends Document {
  name: string;
  category: string;
  maxAmountPerDay: number;
  maxAmountPerTrip: number;
  receiptThreshold: number;
  isActive: boolean;
  appliedToRoles: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PolicyRuleSchema = new Schema<IPolicyRule>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    maxAmountPerDay: { type: Number, required: true, min: 0 },
    maxAmountPerTrip: { type: Number, required: true, min: 0 },
    receiptThreshold: { type: Number, required: true, min: 0 },
    isActive: { type: Boolean, default: true },
    appliedToRoles: [{ type: String }],
  },
  { timestamps: true },
);

// Indexes
PolicyRuleSchema.index({ category: 1 });
PolicyRuleSchema.index({ isActive: 1 });

export const PolicyRule = require('mongoose').model<IPolicyRule>(
  'PolicyRule',
  PolicyRuleSchema,
);
