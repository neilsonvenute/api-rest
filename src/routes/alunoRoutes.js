import { Router } from 'express';
import alunoControllers from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoControllers.index);
router.post('/', loginRequired, alunoControllers.store);
router.put('/:id', loginRequired, alunoControllers.update);
router.get('/:id', alunoControllers.show);
router.delete('/:id', loginRequired, alunoControllers.delete);

export default router;
