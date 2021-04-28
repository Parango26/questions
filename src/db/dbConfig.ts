import mongoose, { Connection }  from 'mongoose'
import { config } from 'dotenv'
config()

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

const db:Connection = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export default db
