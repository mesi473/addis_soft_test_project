import express from 'express';
import  mongoose from 'mongoose';
import  cors from 'cors';
import  router from './Routes/index';


const PORT = 5000||process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use('',router);

const MongoURL="mongodb+srv://mesi:messi_boy@henok@capston-project.trnd6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(MongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(async res => {
    console.log('our database is running on port 27017');
    if(res){
        app.listen(PORT, ()=>console.log(`server is running on port${PORT}`));
    }
})
