import { NextApiRequest, NextApiResponse } from 'next';

export default function preview(_: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: '/' });
  res.end();
}
