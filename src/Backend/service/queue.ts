import { Queue } from 'bullmq';
import Redis from 'ioredis';

// Create a Redis connection
const redisConnection = new Redis({
  host: 'localhost',
  port: 6379,
});

// Create a queue
export const stockQueue = new Queue('stock-price', { connection: redisConnection });