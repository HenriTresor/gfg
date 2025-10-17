import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/authController';
import { handleValidationErrors } from '../middleware/validation';
import { asyncHandler } from '../middleware/errorHandler';

const router = Router();
const authController = new AuthController();

// Validation chains for auth operations
const registerValidation = [
    body('email')
        .isEmail()
        .withMessage('Must be a valid email address')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8, max: 128 })
        .withMessage('Password must be between 8 and 128 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    body('firstName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('First name must not exceed 100 characters'),
    body('lastName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Last name must not exceed 100 characters'),
    body('role')
        .isIn(['FARM_SUPERVISOR', 'SYSTEM_ADMIN'])
        .withMessage('Role must be either FARM_SUPERVISOR or SYSTEM_ADMIN'),
    handleValidationErrors,
];

const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Must be a valid email address')
        .normalizeEmail(),
    body('password')
        .notEmpty()
        .withMessage('Password is required'),
    handleValidationErrors,
];

const refreshTokenValidation = [
    body('refreshToken')
        .notEmpty()
        .withMessage('Refresh token is required'),
    handleValidationErrors,
];

// POST /api/auth/register - Register a new user
router.post('/register', registerValidation, asyncHandler(authController.register));

// POST /api/auth/login - Login user
router.post('/login', loginValidation, asyncHandler(authController.login));

// POST /api/auth/refresh - Refresh access token
router.post('/refresh', refreshTokenValidation, asyncHandler(authController.refreshToken));

// POST /api/auth/logout - Logout user
router.post('/logout', asyncHandler(authController.logout));

export default router;
