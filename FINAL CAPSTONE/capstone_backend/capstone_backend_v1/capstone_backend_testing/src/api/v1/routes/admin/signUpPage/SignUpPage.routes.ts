import { Router } from "express";
import { addUser } from "./SignUpPage.controller";

const router = Router();

router
    .route('/')
    .post(addUser);

export default router;