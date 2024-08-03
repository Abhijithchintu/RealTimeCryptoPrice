import { Worker } from 'bullmq';
import Redis from 'ioredis';
import {jobProcessor} from './jobProcessor';

// Create a Redis connection
const redisConnection = new Redis({
  host: 'localhost',
  port: 6379,
  maxRetriesPerRequest: null
});

export async function WorkerStart() {
  await jobProcessor.addJobs()
  const worker = new Worker('stock-price', async job => {
    console.log('came near job',job.data.symbol )
    // Process the job
    await jobProcessor.fetchStockPrice(job.data.symbol);
  }, { connection: redisConnection , autorun: false, concurrency: 5},); // Adjust concurrency as needed

  worker.run()

  worker.on('completed', job => {
    console.log(`Job ${job.id} completed`);
  });

  worker.on('progress', (job, progress: number | object) => {
    console.log('in progress')
  });

  worker.on('failed', (job, err) => {
    console.error(`Job ${job && job.id} failed with error ${err.message}`);
  });

}

