import debug from 'debug';
import { config } from 'dotenv';
import { connect } from 'amqplib/callback_api';

const debugged = debug('app');
config();

const recieveRabbitMQ = (queue) => {
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

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, async(message) => {
                debugged( `Message Received: ${message.content.toString()}`);
            }, {
                noAck: true
             });
         });
    });
}

export default recieveRabbitMQ;