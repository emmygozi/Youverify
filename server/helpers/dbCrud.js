import debug from 'debug';
import Product from '@models/productService';

const appDebugger = debug('app');
// generic method to save models. It saves Customer model by default is model name is not passed into it
const saveModel = async(name, detail, createdModel = Product) => {
    const aModel = new createdModel({
        name,
        detail
    });
    try {
        return await aModel.save();
    } catch (err) {
        appDebugger(err)
    }
};

export default saveModel;