import debug from 'debug';
import { config } from 'dotenv';
import { connect } from 'amqplib/callback_api';

const debugged = debug('app');
config();

const sendRabbitMQ = (queue, message) => {
    connect('amqp://localhost', async(error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel(async(error1, channel) => {
            if (error1) {
                throw error1;
            }
    
            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(message));
    
            debugged(`message Sent: ${message}`);
        });
    });
}

export default sendRabbitMQ;