import * as mongoose from 'mongoose';
import { UserModel } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('users', UserModel);

export class UserController {
    public getUsers(req: Request, res: Response): void {
        User.find({}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    }

    public addNewUser(req: Request, res: Response): void {
        const user = new User(req.body);
        user.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}
