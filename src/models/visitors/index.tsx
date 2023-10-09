import mongoose, { Model, Document } from 'mongoose';

interface VisitorAttributes {
  visitors: number;
  location: string;
  device: string;
  premiumUserNo: number;
  month: string;
}

export interface VisitorDocument extends VisitorAttributes, Document {}

const VisitorsSchema = new mongoose.Schema<VisitorDocument>(
  {
    visitors: Number,
    location: String,
    device: String,
    premiumUserNo: Number,
    month: String,
  },
  { timestamps: true }
);

const Visitor: Model<VisitorDocument> =
  mongoose.models.Visitors || mongoose.model<VisitorDocument>('Visitors', VisitorsSchema);

export default Visitor;
