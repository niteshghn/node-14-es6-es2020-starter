import express from 'express';
import {listUsers, getRawData} from "../controllers/usersController.js";
const router = express.Router();

/* GET users listing. */
router.get('/', listUsers);
router.get('/raw',getRawData);
export default router;
