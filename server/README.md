# GFG Server

A Node.js TypeScript server with Express, Prisma ORM, and PostgreSQL.

## Features

- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens with refresh token support
- **Security**: bcrypt password hashing, CORS, Helmet, rate limiting
- **Logging**: Winston with daily rotate files
- **Validation**: express-validator with custom validation rules
- **Error Handling**: Centralized error handling with custom error classes

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

## Installation

1. Clone the repository and navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `env.example`:
   ```bash
   cp env.example .env
   ```

4. Update the `.env` file with your database credentials and other configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/gfg_db?schema=public"
   JWT_SECRET="your-super-secret-jwt-key"
   JWT_REFRESH_SECRET="your-super-secret-refresh-key"
   ```

## Database Setup

1. Create your PostgreSQL database:
   ```sql
   CREATE DATABASE gfg_db;
   ```

2. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```

3. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

4. (Optional) Seed the database with sample data:
   ```bash
   npm run db:seed
   ```

## Development

Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:deploy` - Deploy migrations to production
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:reset` - Reset database and run all migrations
- `npm run db:seed` - Seed database with sample data

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API Info
- `GET /api` - API information

## Project Structure

```
src/
├── config/          # Configuration files
│   ├── database.ts  # Database connection
│   ├── logger.ts    # Winston logger setup
│   ├── cors.ts      # CORS configuration
│   ├── jwt.ts       # JWT configuration
│   └── index.ts     # Main config
├── middleware/      # Express middleware
│   ├── auth.ts      # Authentication middleware
│   ├── validation.ts # Request validation
│   ├── errorHandler.ts # Error handling
│   └── rateLimiter.ts # Rate limiting
├── routes/          # API routes (to be created)
├── controllers/     # Route controllers (to be created)
├── services/        # Business logic (to be created)
├── utils/           # Utility functions
│   ├── crypto.ts    # Encryption utilities
│   ├── response.ts  # Response helpers
│   └── pagination.ts # Pagination utilities
├── types/           # TypeScript type definitions
├── models/          # Data models
├── app.ts           # Express app configuration
└── server.ts        # Server entry point
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment | development |
| `DATABASE_URL` | PostgreSQL connection string | - |
| `JWT_SECRET` | JWT secret key | - |
| `JWT_REFRESH_SECRET` | JWT refresh secret key | - |
| `CORS_ORIGIN` | CORS allowed origin | http://localhost:3001 |
| `LOG_LEVEL` | Logging level | info |
| `BCRYPT_ROUNDS` | bcrypt salt rounds | 12 |

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS protection
- Helmet security headers
- Rate limiting
- Request validation
- SQL injection prevention (Prisma)

## Logging

Logs are written to the `logs/` directory with daily rotation:
- `combined-YYYY-MM-DD.log` - All logs
- `error-YYYY-MM-DD.log` - Error logs only

## Contributing

1. Follow TypeScript best practices
2. Add proper error handling
3. Include input validation
4. Write meaningful commit messages
5. Test your changes thoroughly

## License

ISC

