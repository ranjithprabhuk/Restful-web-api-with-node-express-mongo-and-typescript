import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { UserRoutes } from './routes/userRoutes';

class App {
    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();
    public mongoUrl: string = 'mongodb://localhost:27017/Users';

    constructor() {
        this.app = express();
        this.configureApp();
        this.initializeMongoConnection();

        // Wire the Route to the app
        this.userRoutes.routes(this.app);
    }

    private configureApp(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private initializeMongoConnection(): void {
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;
