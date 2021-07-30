import express from 'express';
import productController from '@controllers/productService';
import customerController from '@controllers/customerService';
import orderController from '@controllers/orderService';
import paymentController from '@controllers/paymentService';


const appRouter = express.Router();

appRouter.get('/product', productController.create);
appRouter.get('/customer', customerController.create);
appRouter.get('/order', orderController.create);
appRouter.get('/payment', paymentController.cache, paymentController.create);

export default appRouter;