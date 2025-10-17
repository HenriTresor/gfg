import { Router } from 'express';
import { body } from 'express-validator';
import { authenticateToken, requireRole } from '../middleware/auth';
import { validationChains, handleValidationErrors } from '../middleware/validation';
import { AdminController } from '../controllers/adminController';
import { asyncHandler } from '../middleware/errorHandler';

const router = Router();
const adminController = new AdminController();

// Validation chains for admin operations
const approveRequestValidation = [
    body('signature')
        .optional()
        .isLength({ max: 500 })
        .withMessage('Signature must not exceed 500 characters'),
    handleValidationErrors,
];

const rejectRequestValidation = [
    body('rejectionReason')
        .isLength({ min: 1, max: 500 })
        .withMessage('Rejection reason must be between 1 and 500 characters')
        .trim(),
    handleValidationErrors,
];

const paymentReportValidation = [
    body('startDate')
        .optional()
        .isISO8601()
        .withMessage('Start date must be a valid ISO date string'),
    body('endDate')
        .optional()
        .isISO8601()
        .withMessage('End date must be a valid ISO date string'),
    body('farmName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Farm name must not exceed 100 characters'),
    body('status')
        .optional()
        .isIn(['APPROVED', 'PENDING'])
        .withMessage('Status must be either APPROVED or PENDING'),
    handleValidationErrors,
];

const createSupervisorValidation = [
    body('email')
        .isEmail()
        .withMessage('Must be a valid email address')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8, max: 128 })
        .withMessage('Password must be between 8 and 128 characters'),
    body('firstName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('First name must not exceed 100 characters'),
    body('lastName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Last name must not exceed 100 characters'),
    handleValidationErrors,
];

// All routes require authentication and admin role
router.use(authenticateToken);
router.use(requireRole(['SYSTEM_ADMIN']));

// GET /api/admin/casual-work-entries - Get all casual work entries (for admin)
router.get('/casual-work-entries', asyncHandler(adminController.getAllCasualWorkEntries));

// GET /api/admin/casual-work-entries/pending - Get all pending casual work entries
router.get('/casual-work-entries/pending', asyncHandler(adminController.getPendingCasualWorkEntries));

// GET /api/admin/casual-work-entries/:id - Get a specific casual work entry
router.get('/casual-work-entries/:id', validationChains.getById, asyncHandler(adminController.getCasualWorkEntryById));

// GET /api/admin/payment-report - Generate payment report
router.get('/payment-report', asyncHandler(adminController.generatePaymentReport.bind(adminController)));

// POST /api/admin/payment-report - Generate custom payment report
router.post('/payment-report', paymentReportValidation, asyncHandler(adminController.generateCustomPaymentReport.bind(adminController)));

// GET /api/admin/payment-report/latest - Get latest generated report
router.get('/payment-report/latest', asyncHandler(adminController.getLatestReport.bind(adminController)));

// GET /api/admin/payment-reports - Get all generated reports
router.get('/payment-reports', asyncHandler(adminController.getAllReports.bind(adminController)));

// GET /api/admin/payment-report/:id - Get a specific report by ID
router.get('/payment-report/:id', validationChains.getById, asyncHandler(adminController.getReportById.bind(adminController)));

// GET /api/admin/statistics - Get system statistics
router.get('/statistics', asyncHandler(adminController.getStatistics));

// POST /api/admin/supervisors - Create a new farm supervisor
router.post('/supervisors', createSupervisorValidation, asyncHandler(adminController.createSupervisor));

export default router;
