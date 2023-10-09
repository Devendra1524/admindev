import mongoose, { Model, Document } from 'mongoose';

interface ProductAttributes {
  name: string;
  price: number;
  visitors: number;
  sales: number;
  month: string;
}

export interface ProductDocument extends ProductAttributes, Document {}

const ProductSchema = new mongoose.Schema<ProductDocument>(
  {
    name: String,
    price: Number,
    visitors: Number,
    sales: Number,
    month: String,
  },
  { timestamps: true }
);

const Product: Model<ProductDocument> =
  mongoose.models.Products || mongoose.model<ProductDocument>('Products', ProductSchema);

export default Product;
