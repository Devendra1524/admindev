import connectToDB from '@/database';
import Visitor from '@/models/visitors';
import { NextApiResponse } from 'next';

export const dynamic = 'force-dynamic';

export default async function handler(req, res: NextApiResponse) {
  try {
    await connectToDB();
    const getAllVisitorsInfo = await Visitor.find({});

    if (getAllVisitorsInfo) {
      res.status(200).json({
        success: true,
        data: getAllVisitorsInfo,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch the visitors! Please try again after some time.',
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
