import connectToDB from '@/database';
import Product from '@/models/product';
import { NextApiResponse } from 'next';

export const dynamic = 'force-dynamic';

export default async function handler(req, res: NextApiResponse) {
  try {
    await connectToDB();

    const extractData = await req.body;
    const newlyCreatedProduct = await Product.create(extractData);

    if (newlyCreatedProduct) {
      res.status(200).json({
        success: true,
        message: 'Product added successfully',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to add a product! Please try again later.',
      });
    }
  } catch (e) {
    console.error(e);

    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
}
