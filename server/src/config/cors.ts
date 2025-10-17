import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        // Allow all origins in development
        if (process.env.NODE_ENV === 'development') {
            return callback(null, true);
        }

        // In production, allow specific origins
        const allowedOrigins = [
            'http://localhost:5173',  // Vite dev server
            'http://localhost:3000',  // Alternative port
            'http://localhost:5174',  // Alternative Vite port
            'http://127.0.0.1:5173',
            'http://localhost:5177'
        ];

        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'Cache-Control',
        'Pragma',
    ],
    exposedHeaders: ['X-Total-Count', 'X-Page-Count'],
    maxAge: 86400, // 24 hours
};

export default corsOptions;
