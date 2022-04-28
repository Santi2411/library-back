import { connect } from 'mongoose';

class DataBase {
    async runConnection() {
        await connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&useNewUrlParser=true&w=majority`, { autoCreate: true, autoIndex: true }, function (err) {
            if (err) {
                console.log('Unable to connect to the server. Please start the server. Error:', err);
            } else {
                console.log('Connected to Server successfully!');
            }
        })
    }
}

export default new DataBase();
