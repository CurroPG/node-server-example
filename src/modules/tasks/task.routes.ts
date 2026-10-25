import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { createTaskSchema, updateTaskSchema } from './tasks.schema.js';
import { createTaskCtrl, listTaskCtrl, getTaskCtrl, updateTaskCtrl, deleteTaskCtrl } from './task.controller.js';

const router = Router();

router.post('/', validate(createTaskSchema), createTaskCtrl);
router.get('/', listTaskCtrl);
router.get('/:id', getTaskCtrl);
router.patch('/:id', validate(updateTaskSchema), updateTaskCtrl);
router.delete('/:id', deleteTaskCtrl);

export default router;