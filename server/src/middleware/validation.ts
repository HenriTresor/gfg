import { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';
import logger from '../config/logger';

// Middleware to handle validation errors
export const handleValidationErrors = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => ({
            field: (error as any).param || (error as any).path || 'unknown',
            message: error.msg,
            value: (error as any).value,
        }));

        logger.warn('Validation errors:', { errors: errorMessages, body: req.body });

        res.status(400).json({
            error: 'Validation failed',
            details: errorMessages,
        });
        return;
    }

    next();
};

// Common validation rules
export const commonValidations = {
    // User validation
    email: body('email')
        .isEmail()
        .withMessage('Must be a valid email address')
        .normalizeEmail()
        .isLength({ max: 255 })
        .withMessage('Email must not exceed 255 characters'),

    password: body('password')
        .isLength({ min: 8, max: 128 })
        .withMessage('Password must be between 8 and 128 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),

    username: body('username')
        .isLength({ min: 3, max: 50 })
        .withMessage('Username must be between 3 and 50 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers, and underscores'),

    firstName: body('firstName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('First name must not exceed 100 characters')
        .matches(/^[a-zA-Z\s'-]+$/)
        .withMessage('First name can only contain letters, spaces, hyphens, and apostrophes'),

    lastName: body('lastName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Last name must not exceed 100 characters')
        .matches(/^[a-zA-Z\s'-]+$/)
        .withMessage('Last name can only contain letters, spaces, hyphens, and apostrophes'),

    // Post validation
    postTitle: body('title')
        .isLength({ min: 1, max: 200 })
        .withMessage('Title must be between 1 and 200 characters')
        .trim(),

    postContent: body('content')
        .isLength({ min: 1, max: 10000 })
        .withMessage('Content must be between 1 and 10000 characters')
        .trim(),

    // Comment validation
    commentContent: body('content')
        .isLength({ min: 1, max: 1000 })
        .withMessage('Comment must be between 1 and 1000 characters')
        .trim(),

    // ID validation
    mongoId: param('id')
        .isLength({ min: 24, max: 24 })
        .withMessage('Invalid ID format')
        .matches(/^[0-9a-fA-F]{24}$/)
        .withMessage('ID must be a valid MongoDB ObjectId'),

    cuid: param('id')
        .isLength({ min: 25, max: 25 })
        .withMessage('Invalid ID format')
        .matches(/^c[a-z0-9]{24}$/)
        .withMessage('ID must be a valid CUID'),

    // Pagination validation
    page: query('page')
        .optional()
        .isInt({ min: 1 })
        .withMessage('Page must be a positive integer'),

    limit: query('limit')
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage('Limit must be between 1 and 100'),

    // Search validation
    search: query('search')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Search term must not exceed 100 characters')
        .trim(),
};

// Validation chains for common operations
export const validationChains = {
    // User registration
    registerUser: [
        commonValidations.email,
        commonValidations.password,
        commonValidations.username,
        commonValidations.firstName,
        commonValidations.lastName,
        handleValidationErrors,
    ],

    // User login
    loginUser: [
        commonValidations.email,
        body('password')
            .notEmpty()
            .withMessage('Password is required'),
        handleValidationErrors,
    ],

    // Create post
    createPost: [
        commonValidations.postTitle,
        commonValidations.postContent,
        handleValidationErrors,
    ],

    // Update post
    updatePost: [
        commonValidations.cuid,
        commonValidations.postTitle,
        commonValidations.postContent,
        handleValidationErrors,
    ],

    // Create comment
    createComment: [
        commonValidations.cuid,
        commonValidations.commentContent,
        handleValidationErrors,
    ],

    // Get by ID
    getById: [
        commonValidations.cuid,
        handleValidationErrors,
    ],

    // Pagination
    pagination: [
        commonValidations.page,
        commonValidations.limit,
        commonValidations.search,
        handleValidationErrors,
    ],
};
