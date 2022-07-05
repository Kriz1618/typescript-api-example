import * as express from 'express';
import * as mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';
import messanger from './src/controllers/createMessage';
import { Settings } from './settings';

const app = express();
const PORT: number = 3000;
const dataBaseUri: string = `mongodb+srv://${Settings.user}:${Settings.user}@testcluster.nvv64.mongodb.net/?retryWrites=true&w=majoritymongodb://linkedintest:testdata12345@ds151232.mlab.com:51232/linkedin_test`; 

let messages = new messanger(Settings.PORT);
// mongoose connection
mongoose.connect(dataBaseUri, {});

// parsing body
app.use(express.json());

routes(app);

function nameCreator<T>(name: T): T {
    return name;
}

let myName = nameCreator<string>('Kriz, ');
// serving static files

interface Warriors {
    weapon: string;
    skills: number;
}

interface Warriors {
    name: string;
}

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messages.messagePrint(),
    )
);

let ninja: Warriors = {
    weapon: 'Shuriken',
    skills: 5,
    name: 'Kr'
}

app.listen(Settings.PORT, () =>
    console.log(nameCreator(myName), `Server is running on port ${Settings.PORT}`)
);