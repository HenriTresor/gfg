import { Router } from 'express';
import { body } from 'express-validator';
import { authenticateToken, requireRole } from '../middleware/auth';
import { validationChains, handleValidationErrors } from '../middleware/validation';
import { CasualWorkEntryController } from '../controllers/casualWorkEntryController';
import { asyncHandler } from '../middleware/errorHandler';

const router = Router();
const casualWorkEntryController = new CasualWorkEntryController();

// Validation chains for casual work entry operations
const createCasualWorkEntryValidation = [
    body('casualId')
        .notEmpty()
        .withMessage('Casual ID is required')
        .isLength({ min: 25, max: 25 })
        .withMessage('Invalid casual ID format'),
    body('activityDone')
        .isLength({ min: 1, max: 200 })
        .withMessage('Activity done must be between 1 and 200 characters')
        .trim(),
    body('unit')
        .isInt({ min: 1 })
        .withMessage('Unit must be a positive integer'),
    body('costPerUnit')
        .isFloat({ min: 0 })
        .withMessage('Cost per unit must be a positive number'),
    body('date')
        .isISO8601()
        .withMessage('Date must be a valid ISO date string'),
    body('farmName')
        .isLength({ min: 1, max: 100 })
        .withMessage('Farm name must be between 1 and 100 characters')
        .trim(),
    body('period')
        .isLength({ min: 1, max: 50 })
        .withMessage('Period must be between 1 and 50 characters')
        .trim(),
    body('month')
        .isLength({ min: 1, max: 50 })
        .withMessage('Month must be between 1 and 50 characters')
        .trim(),
    body('crop')
        .isLength({ min: 1, max: 100 })
        .withMessage('Crop must be between 1 and 100 characters')
        .trim(),
    body('cropStage')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Crop stage must not exceed 100 characters')
        .trim(),
    body('adjustment')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Adjustment must be a non-negative number'),
    handleValidationErrors,
];

const updateCasualWorkEntryValidation = [
    body('activityDone')
        .optional()
        .isLength({ min: 1, max: 200 })
        .withMessage('Activity done must be between 1 and 200 characters')
        .trim(),
    body('unit')
        .optional()
        .isInt({ min: 1 })
        .withMessage('Unit must be a positive integer'),
    body('costPerUnit')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Cost per unit must be a positive number'),
    body('date')
        .optional()
        .isISO8601()
        .withMessage('Date must be a valid ISO date string'),
    body('farmName')
        .optional()
        .isLength({ min: 1, max: 100 })
        .withMessage('Farm name must be between 1 and 100 characters')
        .trim(),
    body('period')
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage('Period must be between 1 and 50 characters')
        .trim(),
    body('month')
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage('Month must be between 1 and 50 characters')
        .trim(),
    body('crop')
        .optional()
        .isLength({ min: 1, max: 100 })
        .withMessage('Crop must be between 1 and 100 characters')
        .trim(),
    body('cropStage')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Crop stage must not exceed 100 characters')
        .trim(),
    body('adjustment')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Adjustment must be a non-negative number'),
    handleValidationErrors,
];

// All routes require authentication
router.use(authenticateToken);

// GET /api/casual-work-entries - Get all casual work entries for the current user
router.get('/', asyncHandler(casualWorkEntryController.getAllCasualWorkEntries));

// GET /api/casual-work-entries/search - Search casual work entries
router.get('/search', asyncHandler(casualWorkEntryController.searchCasualWorkEntries));

// GET /api/casual-work-entries/:id - Get a specific casual work entry
router.get('/:id', validationChains.getById, asyncHandler(casualWorkEntryController.getCasualWorkEntryById));

// POST /api/casual-work-entries - Create a new casual work entry
router.post('/', createCasualWorkEntryValidation, asyncHandler(casualWorkEntryController.createCasualWorkEntry));

// PUT /api/casual-work-entries/:id - Update a casual work entry (only if PENDING)
router.put('/:id', validationChains.getById, updateCasualWorkEntryValidation, asyncHandler(casualWorkEntryController.updateCasualWorkEntry));

// DELETE /api/casual-work-entries/:id - Delete a casual work entry (only if PENDING)
router.delete('/:id', validationChains.getById, asyncHandler(casualWorkEntryController.deleteCasualWorkEntry));

export default router;

