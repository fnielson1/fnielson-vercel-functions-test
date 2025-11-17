import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getGreeting } from '../src/greet';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: getGreeting() });
}
