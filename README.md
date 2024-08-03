# RealTimeCryptoPrice
1. It requires atlas mongodb free or enterprise account. should add url in backend/model/db.ts.
2. Create a db with name test and collection stocks in cluster. Now get this app id from mongodb (from app services of your cluster) and add it in frontend/lib/realms.ts.
3. Then also in app services for cluster, go to authentication and enable allow users to login anonymously.
4. Go to rules in app service and add rules for your db , collection.
5. It requires redis version 7 (server and cli) and it should be running.

Have used bullmq for fetching and ingesting data in mongodb. BullMQ supports multiple workers processing jobs concurrently, which means you can handle fetching and processing multiple stock prices in parallel, improving efficiency. Because of this we can scale our system.
