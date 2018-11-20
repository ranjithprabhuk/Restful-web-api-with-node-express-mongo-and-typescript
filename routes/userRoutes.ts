import { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

export class UserRoutes {
    private userController: UserController = new UserController();

    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Details fetched successfully',
                });
            });

        app.route('/users').get(this.userController.getUsers);
        app.route('/users').post(this.userController.addNewUser);
    }
}
