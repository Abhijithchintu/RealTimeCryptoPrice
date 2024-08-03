import './models/db';
import './service/queue';
import './service/worker';
import {WorkerStart} from "@/src/Backend/service/worker";

WorkerStart();

