import { router } from "../routes/addUser.routes.js";
import express from 'express';

export const RegRouter = express.Router();

RegRouter.use('/addUser',router);