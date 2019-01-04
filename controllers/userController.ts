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

    public getUser(req: Request, res: Response): void {
        User.findOne({ _id: req.params.userId}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    }

    public addNewUser(req: Request, res: Response): void {
        const user = new User(req.body);
        user.save((err, newUser) => {
            if (err) {
                res.send(err);
            }
            res.json(newUser);
        });
    }

    public updateUser(req: Request, res: Response): void {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteUser(req: Request, res: Response): void {
        User.remove({ _id: req.params.userId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }
}
