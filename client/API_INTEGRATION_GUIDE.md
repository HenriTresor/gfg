# API Integration Guide - GFG System

## Overview
This document outlines how the frontend is integrated with the backend APIs for the Green Fresh Growers (GFG) system.

## Base Configuration
- **API Base URL**: `http://localhost:3000/api`
- **Authentication**: JWT tokens stored in localStorage
- **Token Refresh**: Automatic token refresh on 401 errors

## API Endpoints Integrated

### 1. Authentication (`/api/auth`)
**File**: `client/src/lib/api.ts` - `authAPI`

#### Login
```typescript
authAPI.login({ email, password })
```
- **Used in**: Login page
- **Response**: `{ user, accessToken, refreshToken }`
- **Stores**: Tokens in localStorage

#### Register
```typescript
authAPI.register({ email, password, firstName, lastName, role })
```
- **Used in**: Admin creates supervisors
- **Role**: Must be `FARM_SUPERVISOR` or `SYSTEM_ADMIN`

### 2. Casuals Management (`/api/casuals`)
**File**: `client/src/lib/api.ts` - `casualAPI`

#### Get All Casuals
```typescript
casualAPI.getAll({ page, limit, search })
```
- **Used in**: Casuals page, Dashboard
- **Permissions**: Both supervisors and admins

#### Create Casual
```typescript
casualAPI.create({ name, nationalId, phoneNumber })
```
- **Used in**: Casuals page (Add Casual modal)
- **Permissions**: Both supervisors and admins
- **Validation**: National ID must be unique

#### Update Casual
```typescript
casualAPI.update(id, { name, nationalId, phoneNumber, isActive })
```
- **Used in**: Casuals page (Edit modal)
- **Permissions**: **ADMIN ONLY**
- **Backend Route**: Requires `SYSTEM_ADMIN` role

#### Delete Casual
```typescript
casualAPI.delete(id)
```
- **Used in**: Casuals page
- **Permissions**: **ADMIN ONLY**
- **Backend Route**: Requires `SYSTEM_ADMIN` role
- **Type**: Soft delete (sets `isActive` to false)

#### Search Casuals
```typescript
casualAPI.search(searchTerm, { page, limit })
```
- **Used in**: Casuals page search functionality

### 3. Work Entries (`/api/casual-work-entries`)
**File**: `client/src/lib/api.ts` - `workEntryAPI`

#### Get All Work Entries
```typescript
workEntryAPI.getAll({ page, limit, status, farmName, month, crop })
```
- **Used in**: Work Entries page, Dashboard
- **Permissions**: Supervisors see their own, admins see all

#### Create Work Entry
```typescript
workEntryAPI.create({
  casualId, activityDone, unit, costPerUnit, date,
  farmName, period, month, crop, cropStage, adjustment
})
```
- **Used in**: Work Entries page (Add Work Entry modal)
- **Permissions**: **SUPERVISOR ONLY**
- **Calculations**: 
  - `amount = (unit × costPerUnit) - adjustment`
  - `amountInclMomoCharges = amount + (amount × 0.01)`

#### Update Work Entry
```typescript
workEntryAPI.update(id, workEntryData)
```
- **Used in**: Work Entries page (Edit modal)
- **Permissions**: Supervisor who created it

#### Delete Work Entry
```typescript
workEntryAPI.delete(id)
```
- **Used in**: Work Entries page
- **Permissions**: Supervisor who created it

### 4. Admin Functions (`/api/admin`)
**File**: `client/src/lib/api.ts` - `adminAPI`

#### Get Pending Work Entries
```typescript
adminAPI.getPendingWorkEntries({ page, limit, farmName, supervisorId })
```
- **Used in**: Admin Pending Requests page
- **Permissions**: **ADMIN ONLY**

#### Approve Work Entry
```typescript
adminAPI.approveWorkEntry(id, { signature })
```
- **Used in**: Admin Pending Requests page
- **Permissions**: **ADMIN ONLY**
- **Action**: Changes status to `APPROVED`

#### Reject Work Entry
```typescript
adminAPI.rejectWorkEntry(id, { rejectionReason })
```
- **Used in**: Admin Pending Requests page
- **Permissions**: **ADMIN ONLY**
- **Required**: Must provide `rejectionReason`
- **Action**: Changes status to `REJECTED`

#### Generate Payment Report
```typescript
adminAPI.generateCustomPaymentReport({
  startDate, endDate, farmName, status
})
```
- **Used in**: Admin Reports page
- **Permissions**: **ADMIN ONLY**
- **Response**: Aggregated payment data by casual worker

#### Get Statistics
```typescript
adminAPI.getStatistics()
```
- **Used in**: Dashboard (admin view)
- **Permissions**: **ADMIN ONLY**
- **Response**: System-wide statistics

#### Create Supervisor
```typescript
adminAPI.createSupervisor({ email, password, firstName, lastName })
```
- **Used in**: Admin can create new supervisors
- **Permissions**: **ADMIN ONLY**
- **Role**: Automatically set to `FARM_SUPERVISOR`

## Permission Matrix

| Feature | Farm Supervisor | System Admin |
|---------|----------------|--------------|
| View Casuals | ✅ | ✅ |
| Add Casual | ✅ | ✅ |
| Edit Casual | ❌ | ✅ |
| Delete Casual | ❌ | ✅ |
| Create Work Entry | ✅ | ❌ |
| View Own Work Entries | ✅ | ❌ |
| Approve/Reject Requests | ❌ | ✅ |
| View All Work Entries | ❌ | ✅ |
| Generate Reports | ❌ | ✅ |
| Create Supervisor | ❌ | ✅ |
| View Statistics | ❌ | ✅ |

## Frontend Pages & Their APIs

### 1. Login Page (`/login`)
- **API**: `authAPI.login()`
- **Features**: Email/password authentication
- **On Success**: Redirects to dashboard, stores tokens

### 2. Dashboard (`/dashboard`)
- **APIs**: 
  - `casualAPI.getAll()` - Total casuals count
  - `workEntryAPI.getAll()` - Recent work entries
  - `adminAPI.getStatistics()` - Admin stats (admin only)
- **Features**: 
  - Shows stats cards
  - Recent work entries table
  - Role-based content

### 3. Casuals Page (`/casuals`)
- **APIs**:
  - `casualAPI.getAll()` - List all casuals
  - `casualAPI.search()` - Search functionality
  - `casualAPI.create()` - Add new casual
  - `casualAPI.update()` - Edit casual (admin only)
  - `casualAPI.delete()` - Delete casual (admin only)
- **Features**:
  - Search by name, national ID, phone
  - Add casual modal
  - Edit/Delete buttons (admin only)
  - Pagination

### 4. Work Entries Page (`/work-entries`)
- **APIs**:
  - `workEntryAPI.getAll()` - List all work entries
  - `casualAPI.getAll()` - Get casuals for dropdown
  - `workEntryAPI.create()` - Create new entry
  - `workEntryAPI.update()` - Edit entry
  - `workEntryAPI.delete()` - Delete entry
- **Features**:
  - Create work entry with full form
  - View all work entries
  - Search functionality
  - Status badges

### 5. Admin Pending Requests (`/admin/pending`)
- **APIs**:
  - `adminAPI.getPendingWorkEntries()` - Get pending requests
  - `adminAPI.approveWorkEntry()` - Approve request
  - `adminAPI.rejectWorkEntry()` - Reject request
- **Features**:
  - View all pending requests
  - Approve/Reject with modals
  - Require rejection reason
  - Statistics cards

### 6. Admin Reports (`/admin/reports`)
- **APIs**:
  - `adminAPI.generateCustomPaymentReport()` - Generate report
  - Export to CSV functionality
- **Features**:
  - Filter by date, farm, status
  - View aggregated payment data
  - Export to CSV
  - Summary statistics

## Error Handling

All API calls include:
- **Try-catch blocks** for error handling
- **Console logging** for debugging
- **User-friendly error messages**
- **Loading states** during API calls

## Token Management

### Storage
- `accessToken` - Stored in localStorage
- `refreshToken` - Stored in localStorage
- `user` - User data stored in localStorage

### Refresh Logic
- Automatic token refresh on 401 errors
- Retry original request after refresh
- Redirect to login if refresh fails

### Interceptors
```typescript
// Request interceptor - adds token to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - handles token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 and refresh token
  }
);
```

## Testing the Integration

### Test Credentials
- **Admin**: `admin@gfg.com` / `admin123`
- **Supervisor**: `supervisor@gfg.com` / `supervisor123`

### Test Flow
1. **Login** as admin or supervisor
2. **Dashboard** - Verify stats load correctly
3. **Casuals** - Test CRUD operations
4. **Work Entries** - Create and view entries
5. **Admin Pending** - Approve/reject requests (admin only)
6. **Admin Reports** - Generate and export reports (admin only)

## Notes
- All API calls are properly typed with TypeScript
- Role-based access control is enforced on both frontend and backend
- The system follows RESTful API conventions
- Error messages are user-friendly and informative

