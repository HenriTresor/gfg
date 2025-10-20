import { Router } from 'express';
import { body } from 'express-validator';
import { authenticateToken, requireRole } from '../middleware/auth';
import { validationChains, handleValidationErrors } from '../middleware/validation';
import { CasualController } from '../controllers/casualController';
import { asyncHandler } from '../middleware/errorHandler';

const router = Router();
const casualController = new CasualController();

// Validation chains for casual operations
const createCasualValidation = [
    body('name')
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters')
        .trim(),
    body('nationalId')
        .isLength({ min: 16, max: 16 })
        .withMessage('National ID must be exactly 16 characters')
        .matches(/^[0-9]+$/)
        .withMessage('National ID must contain only numbers'),
    body('phoneNumber')
        .isLength({ min: 9, max: 15 })
        .withMessage('Phone number must be between 9 and 15 characters')
        .matches(/^[0-9]+$/)
        .withMessage('Phone number must contain only numbers'),
    handleValidationErrors,
];

const updateCasualValidation = [
    body('name')
        .optional()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters')
        .trim(),
    body('nationalId')
        .optional()
        .isLength({ min: 16, max: 16 })
        .withMessage('National ID must be exactly 16 characters')
        .matches(/^[0-9]+$/)
        .withMessage('National ID must contain only numbers'),
    body('phoneNumber')
        .optional()
        .isLength({ min: 9, max: 15 })
        .withMessage('Phone number must be between 9 and 15 characters')
        .matches(/^[0-9]+$/)
        .withMessage('Phone number must contain only numbers'),
    body('isActive')
        .optional()
        .isBoolean()
        .withMessage('isActive must be a boolean value'),
    handleValidationErrors,
];

// All routes require authentication
router.use(authenticateToken);

// GET routes - both supervisors and admins can view
// POST routes - both supervisors and admins can create
// PUT/DELETE routes - only admins can update/delete

// GET /api/casuals - Get all casuals with search and pagination
router.get('/', asyncHandler(casualController.getAllCasuals));

// GET /api/casuals/search - Search casuals by name, national ID, or phone
router.get('/search', asyncHandler(casualController.searchCasuals));

// GET /api/casuals/:id - Get a specific casual by ID
router.get('/:id', validationChains.getById, asyncHandler(casualController.getCasualById));

// POST /api/casuals - Create a new casual (both supervisors and admins)
router.post('/', createCasualValidation, asyncHandler(casualController.createCasual));

// PUT /api/casuals/:id - Update a casual (only admins)
router.put('/:id', requireRole(['SYSTEM_ADMIN']), validationChains.getById, updateCasualValidation, asyncHandler(casualController.updateCasual));

// PATCH /api/casuals/:id/toggle-status - Toggle active/inactive status (only admins)
router.patch('/:id/toggle-status', requireRole(['SYSTEM_ADMIN']), validationChains.getById, asyncHandler(casualController.toggleActiveStatus));

// DELETE /api/casuals/:id - Permanently delete a casual (only admins)
router.delete('/:id', requireRole(['SYSTEM_ADMIN']), validationChains.getById, asyncHandler(casualController.deleteCasual));

export default router;
