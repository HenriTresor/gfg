import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

const logDir = 'logs';

// Define log format
const logFormat = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.prettyPrint()
);

// Define console format for development
const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(({ timestamp, level, message, stack }) => {
        return `${timestamp} [${level}]: ${stack || message}`;
    })
);

// Create the logger
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: logFormat,
    defaultMeta: { service: 'gfg-server' },
    transports: [
        // Error log file
        new DailyRotateFile({
            filename: path.join(logDir, 'error-%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            maxSize: process.env.LOG_FILE_MAX_SIZE || '20m',
            maxFiles: process.env.LOG_FILE_MAX_FILES || '14d',
            zippedArchive: true,
        }),
        // Combined log file
        new DailyRotateFile({
            filename: path.join(logDir, 'combined-%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            maxSize: process.env.LOG_FILE_MAX_SIZE || '20m',
            maxFiles: process.env.LOG_FILE_MAX_FILES || '14d',
            zippedArchive: true,
        }),
    ],
});

// Add console transport for development
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: consoleFormat,
        })
    );
}

// Create a stream object with a 'write' function for Morgan
export const morganStream = {
    write: (message: string) => {
        logger.info(message.trim());
    },
};

export default logger;

