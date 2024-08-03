import type { NextApiRequest, NextApiResponse } from 'next'
import { WorkerStart } from '../service/worker'

export default function startWorker(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    WorkerStart();
    res.status(200).json({ status: 'worker started' })
}
