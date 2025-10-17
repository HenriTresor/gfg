import { Router } from 'express';
import { DailyCasualRequestController } from '../controllers/dailyCasualRequestController';
import { authenticateToken } from '../middleware/auth';
import { requireRole } from '../middleware/auth';

const router = Router();
const controller = new DailyCasualRequestController();

// All routes require authentication
router.use(authenticateToken);

// Supervisor routes
router.post('/', controller.createRequest.bind(controller));
router.get('/my-requests', controller.getMyRequests.bind(controller));
router.put('/:id', controller.updateRequest.bind(controller));
router.delete('/:id', controller.deleteRequest.bind(controller));

// Admin routes
router.get('/all', requireRole(['SYSTEM_ADMIN']), controller.getAllRequests.bind(controller));
router.get('/pending', requireRole(['SYSTEM_ADMIN']), controller.getPendingRequests.bind(controller));
router.patch('/:id/approve', requireRole(['SYSTEM_ADMIN']), controller.approveRequest.bind(controller));
router.patch('/:id/reject', requireRole(['SYSTEM_ADMIN']), controller.rejectRequest.bind(controller));

export default router;

