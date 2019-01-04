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

        app.route('/user').get(this.userController.getUsers);
        app.route('/user/:userId').get(this.userController.getUser);
        app.route('/user').post(this.userController.addNewUser);
        app.route('/user/:userId').put(this.userController.updateUser);
        app.route('/user/:userId').delete(this.userController.deleteUser);
    }
}
