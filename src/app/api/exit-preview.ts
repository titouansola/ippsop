import { NextApiRequest, NextApiResponse } from 'next';

export default function exit(_: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: false });
  res.writeHead(307, { Location: '/' });
  res.end();
}
