import connectToDB from '@/database';
import Visitor from '@/models/visitors';
import { NextApiResponse } from 'next';

export const dynamic = 'force-dynamic';

export default async function handler(req, res: NextApiResponse) {
  try {
    await connectToDB();

    const extractData = await req.body;
    const newlyCreatedVisitorsInfo = await Visitor.create(extractData);

    if (newlyCreatedVisitorsInfo) {
      res.status(200).json({
        success: true,
        message: 'Visitors data added successfully',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to add a visitor! Please try again later.',
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
