import express, {Express} from 'express';
import path from 'path';
import cors, { CorsOptions } from 'cors';
import mongoose from 'mongoose';
import router from "./src/routes/index"


const app: Express = express();
const port = process.env.PORT || 1234;

const uri: string = 'mongodb://127.0.0.1:27017/testdb';

mongoose.connect(uri);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

if (process.env.NODE_ENV === 'development') {
    const corsOptions: CorsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
    app.use(cors());

}



app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });