import { Router } from 'express';
import tokenControllers from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenControllers.store);

export default router;
