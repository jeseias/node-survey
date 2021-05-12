import { Router } from 'express';
import SendMailController from './controllers/send-mail-controller';
import SurveryController from './controllers/survery-controller';
import UserController from './controllers/user-controller';

const userController = new UserController();
const surveryController  = new SurveryController();
const sendMailController = new SendMailController()

const router = Router();

router.get('/surverys', surveryController.show);

router.post('/users', userController.create);
router.post('/surverys', surveryController.create);

router.post('/sendMail', sendMailController.execute);

export default router;