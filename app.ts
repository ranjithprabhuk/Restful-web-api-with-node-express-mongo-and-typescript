import * as express from 'express';
import * as bodyParser from 'body-parser';
import { UserRoutes } from './routes/userRoutes';

class App {

    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.config();

        // Wire the Route to the app
        this.userRoutes.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
