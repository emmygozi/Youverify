import debug from 'debug';
import saveModel from '@helpers/dbCrud';
import Product from '@models/productService';

const appDebugger = debug('app');

class productServiceController {
    static async create(req, res, next) {
        try {
            const product = await saveModel('Nike', 'xxxxx77h7uhe');
            res.send(product);
        } catch (err) {
            appDebugger(err);
        }
    }
}

export default productServiceController;