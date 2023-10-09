import mongoose, { Model, Document } from 'mongoose';

interface UserAttributes {
  email: string;
  name: string;
}

export interface UserDocument extends UserAttributes, Document {}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default User;
