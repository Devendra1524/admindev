import connectToDB from '@/database';
import User from '@/models/user';
import { NextApiResponse } from 'next';

export default async function handler(req, res: NextApiResponse) {
  try {
    await connectToDB();
    const { name, email } = await req.body;

    const newUser = await User.create({ name, email });

    if (newUser) {
      res.status(200).json({
        success: true,
        message: 'User registered',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to register the user! Please try again.',
      });
    }
  } catch (e) {
    console.error(e);

    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
    });
  }
}
