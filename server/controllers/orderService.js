import debug from 'debug';
import recieveRabbitMQ from '@helpers/recieveRabbitMQ';
import saveModel from '@helpers/dbCrud';
import Order from '@models/orderService';

const appDebugger = debug('app');

class orderServiceController {
    static async create(req, res, next) {
        try {
            const order = await saveModel('Rice', 'Better chow', Order);
            await recieveRabbitMQ('myorder');
            res.send(order);
        } catch (err) {
            appDebugger(err);
        }
    }
}

export default orderServiceController;