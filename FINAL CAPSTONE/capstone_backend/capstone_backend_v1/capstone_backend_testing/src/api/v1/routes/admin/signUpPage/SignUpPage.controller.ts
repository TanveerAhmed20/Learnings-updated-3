import { RequestHandler, Response } from "express";
import { IAddUserReq, IUser } from "../../../../../types/loginPage";
import { CustomError } from "../../../../../db/models/custom-error.model";
import { User } from "../../../../../db/models/users.model";

const validateOneInput = (condition: {}) => {
    return new Promise((resolve, reject) => User.find(condition, (err: Error, data: IUser[]) => {
        if (!err) {
            if (data.length === 0) {
                resolve({success: true});
                // return true;
            } else {
                reject({success: false});
                // return false;
            }
        } else {
            reject({err});
            // return false;
        }
    }));
}

export const addUser: RequestHandler = async (req: IAddUserReq, res: Response) => {
    const newUser: IUser = {
        ...req.body,
        isActive: true
    };

    let emailValid: any;
    let userValid: any;

    await validateOneInput({username: newUser.username})
        .then((res) => {userValid = true})
        .catch((err) => {userValid = false});

    await validateOneInput({email: newUser.email})
        .then((res) => {emailValid = true})
        .catch((err) => {emailValid = false});

    if (userValid && emailValid) {
        let saveUser = new User(newUser);

        saveUser.save()
            .then((result) => {
                res.send({
                    userAllowed: userValid,
                    emailAllowed: emailValid
                });
            })
            .catch((err) => {
                res.send(new CustomError('Error while saving', 401, err))
            })
    } else {
        res.send({
            userAllowed: userValid,
            emailAllowed: emailValid
        })
    }
}