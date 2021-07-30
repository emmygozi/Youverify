import debug from 'debug';
import saveModel from '@helpers/dbCrud';
import sendRabbitMQ from '@helpers/sendRabbitMQ';
import Customer from '@models/customerService';

const appDebugger = debug('app');

class customerServiceController {
    static async create(req, res, next) {
        try {
            const customer = await saveModel('John', 'Lekki', Customer);
            const arrayCustomer = Object.entries(customer)
            appDebugger(arrayCustomer[5][1]);
            await sendRabbitMQ('myorder', `${arrayCustomer[5][1].name} from ${arrayCustomer[5][1].detail} ordered Rice`);
            res.send(customer);
        } catch (err) {
            appDebugger(err);
        }
    }
}

export default customerServiceController;