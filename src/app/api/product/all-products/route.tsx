import connectToDB from '@/database';
import Product from '@/models/product';
import { NextApiResponse } from 'next';

export const dynamic = 'force-dynamic';

export default async function handler(req, res: NextApiResponse) {
  try {
    await connectToDB();
    const getAllProducts = await Product.find({});

    if (getAllProducts) {
      res.status(200).json({
        success: true,
        data: getAllProducts,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch the products! Please try again after some time.',
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
