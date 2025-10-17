# Green Fresh Growers API Documentation

## Overview
This API provides endpoints for managing casual workers, work entries, and administrative functions for Green Fresh Growers LTD.

## Base URL
```
http://localhost:3000/api
```

## Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## User Roles
- `FARM_SUPERVISOR`: Can manage casuals and create work entries
- `SYSTEM_ADMIN`: Can approve/reject work entries and generate reports

## Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
```
**Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "Password123!",
  "firstName": "John",
  "lastName": "Doe",
  "role": "FARM_SUPERVISOR"
}
```

#### Login
```http
POST /api/auth/login
```
**Body:**
```json
{
  "email": "user@example.com",
  "password": "Password123!"
}
```

#### Refresh Token
```http
POST /api/auth/refresh
```
**Body:**
```json
{
  "refreshToken": "your-refresh-token"
}
```

#### Logout
```http
POST /api/auth/logout
```

### Casual Management (Farm Supervisor Only)

#### Get All Casuals
```http
GET /api/casuals?page=1&limit=10&search=john
```

#### Search Casuals
```http
GET /api/casuals/search?search=john&page=1&limit=10
```

#### Get Casual by ID
```http
GET /api/casuals/{id}
```

#### Create Casual
```http
POST /api/casuals
```
**Body:**
```json
{
  "name": "John Doe",
  "nationalId": "1234567890123456",
  "phoneNumber": "785871039"
}
```

#### Update Casual
```http
PUT /api/casuals/{id}
```
**Body:**
```json
{
  "name": "John Smith",
  "phoneNumber": "785871040"
}
```

#### Delete Casual (Soft Delete)
```http
DELETE /api/casuals/{id}
```

### Casual Work Entries (Farm Supervisor Only)

#### Get All Work Entries
```http
GET /api/casual-work-entries?page=1&limit=10&status=PENDING
```

#### Search Work Entries
```http
GET /api/casual-work-entries/search?search=weeding&page=1&limit=10
```

#### Get Work Entry by ID
```http
GET /api/casual-work-entries/{id}
```

#### Create Work Entry
```http
POST /api/casual-work-entries
```
**Body:**
```json
{
  "casualId": "casual-id",
  "activityDone": "Weeding",
  "unit": 1,
  "costPerUnit": 5000,
  "date": "2024-01-15T00:00:00.000Z",
  "farmName": "Main Farm",
  "period": "week 31-6",
  "month": "January",
  "crop": "Tomatoes",
  "cropStage": "Vegetative",
  "adjustment": 500
}
```

#### Update Work Entry (Only if PENDING)
```http
PUT /api/casual-work-entries/{id}
```

#### Delete Work Entry (Only if PENDING)
```http
DELETE /api/casual-work-entries/{id}
```

### Admin Functions (System Admin Only)

#### Get All Work Entries (Admin View)
```http
GET /api/admin/casual-work-entries?page=1&limit=10&status=PENDING
```

#### Get Pending Work Entries
```http
GET /api/admin/casual-work-entries/pending?page=1&limit=10
```

#### Get Work Entry by ID (Admin View)
```http
GET /api/admin/casual-work-entries/{id}
```

#### Approve Work Entry
```http
PATCH /api/admin/casual-work-entries/{id}/approve
```
**Body:**
```json
{
  "signature": "Admin signature (optional)"
}
```

#### Reject Work Entry
```http
PATCH /api/admin/casual-work-entries/{id}/reject
```
**Body:**
```json
{
  "rejectionReason": "Reason for rejection"
}
```

#### Generate Payment Report
```http
GET /api/admin/payment-report?startDate=2024-01-01&endDate=2024-01-31&status=APPROVED
```

#### Generate Custom Payment Report
```http
POST /api/admin/payment-report
```
**Body:**
```json
{
  "startDate": "2024-01-01T00:00:00.000Z",
  "endDate": "2024-01-31T23:59:59.999Z",
  "farmName": "Main Farm",
  "status": "APPROVED"
}
```

#### Get System Statistics
```http
GET /api/admin/statistics
```

### Health Check

#### Health Check
```http
GET /health
```

#### Detailed Health Check
```http
GET /health/detailed
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Paginated Response
```json
{
  "success": true,
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `204` - No Content
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `422` - Unprocessable Entity
- `429` - Too Many Requests
- `500` - Internal Server Error

## Validation Rules

### Password Requirements
- Minimum 8 characters
- Must contain uppercase letter
- Must contain lowercase letter
- Must contain number
- Must contain special character

### National ID
- Must be exactly 16 characters
- Must contain only numbers

### Phone Number
- Must be between 9-15 characters
- Must contain only numbers

### Work Entry Calculations
- `amount` = (unit × costPerUnit) - adjustment
- `amountInclMomoCharges` = amount + 200 (fixed momo charges)

## Rate Limiting

- General endpoints: 100 requests per 15 minutes
- Authentication endpoints: 5 attempts per 15 minutes
- API endpoints: 50 requests per 15 minutes

## Sample Workflow

1. **Register/Login** as Farm Supervisor
2. **Create Casuals** with their details
3. **Create Work Entries** for daily work
4. **Login** as System Admin
5. **Review Pending** work entries
6. **Approve/Reject** entries with reasons
7. **Generate Payment Reports** for approved entries

## Environment Variables

Make sure to set these in your `.env` file:
```
DATABASE_URL="postgresql://username:password@localhost:5432/gfg_db"
JWT_SECRET="your-jwt-secret"
JWT_REFRESH_SECRET="your-refresh-secret"
PORT=3000
NODE_ENV=development
```

