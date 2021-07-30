import debug from 'debug';
import redis from 'redis';
import saveModel from '@helpers/dbCrud';
import Payment from '@models/paymentService';

const appDebugger = debug('app');
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

class paymentServiceController {
    static async create(req, res, next) {
        try {
            const payment = await saveModel('Rice', 'Naira', Payment);
            client.setex('Naira', 3600, 'Rice');
            res.send(payment);
        } catch (err) {
            appDebugger(err);
        }
    }

    // can be refactored to a middleware function
    static async cache(req, res, next) {
        client.get('Naira', (err, data) => {
            if (err) throw err;
            if (data !== null) {
            res.send(`${data} came from cache`);
            } else {
            next();
            }
            });
    }
}

export default paymentServiceController;