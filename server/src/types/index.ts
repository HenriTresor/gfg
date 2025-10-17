// User types
export interface CreateUserRequest {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: 'FARM_SUPERVISOR' | 'SYSTEM_ADMIN';
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: {
        id: string;
        email: string;
        firstName?: string;
        lastName?: string;
        role: string;
    };
    accessToken: string;
    refreshToken: string;
}

// Casual types
export interface CreateCasualRequest {
    name: string;
    nationalId: string;
    phoneNumber: string;
}

export interface UpdateCasualRequest {
    name?: string;
    nationalId?: string;
    phoneNumber?: string;
    isActive?: boolean;
}

export interface CasualResponse {
    id: string;
    name: string;
    nationalId: string;
    phoneNumber: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// Casual Work Entry types
export interface CreateCasualWorkEntryRequest {
    casualId: string;
    activityDone: string;
    unit: number;
    costPerUnit: number;
    date: string; // ISO date string
    farmName: string;
    period: string;
    month: string;
    crop: string;
    cropStage?: string;
    adjustment?: number;
}

export interface UpdateCasualWorkEntryRequest {
    activityDone?: string;
    unit?: number;
    costPerUnit?: number;
    date?: string;
    farmName?: string;
    period?: string;
    month?: string;
    crop?: string;
    cropStage?: string;
    adjustment?: number;
}

export interface CasualWorkEntryResponse {
    id: string;
    activityDone: string;
    unit: number;
    costPerUnit: number;
    date: Date;
    farmName: string;
    period: string;
    month: string;
    crop: string;
    cropStage?: string;
    adjustment: number;
    amount: number;
    amountInclMomoCharges: number;
    signature?: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    rejectionReason?: string;
    createdAt: Date;
    updatedAt: Date;
    casual: {
        id: string;
        name: string;
        nationalId: string;
        phoneNumber: string;
    };
    supervisor: {
        id: string;
        username: string;
        firstName?: string;
        lastName?: string;
    };
    admin?: {
        id: string;
        username: string;
        firstName?: string;
        lastName?: string;
    };
}

// Admin approval types
export interface ApproveRequestRequest {
    signature?: string;
}

export interface RejectRequestRequest {
    rejectionReason: string;
}

// Payment report types
export interface PaymentReportRequest {
    startDate?: string;
    endDate?: string;
    farmName?: string;
    status?: 'APPROVED' | 'PENDING';
}

export interface PaymentReportEntry {
    casualId: string;
    casual: {
        name: string;
        nationalId: string;
        phoneNumber: string;
    };
    supervisor: {
        email: string;
        firstName?: string;
        lastName?: string;
    };
    totalAmount: number;
    totalAmountInclMomoCharges: number;
    workEntries: {
        id: string;
        activityDone: string;
        unit: number;
        costPerUnit: number;
        date: Date;
        farmName: string;
        period: string;
        month: string;
        crop: string;
        adjustment: number;
        amount: number;
        amountInclMomoCharges: number;
    }[];
}

export interface PaymentReportResponse {
    entries: PaymentReportEntry[];
    summary: {
        totalCasuals: number;
        totalAmount: number;
        totalAmountInclMomoCharges: number;
        totalWorkEntries: number;
    };
    generatedAt: Date;
    filters: {
        startDate?: Date;
        endDate?: Date;
        farmName?: string;
        status?: string;
    };
}

// Search and pagination types
export interface SearchParams {
    page?: number;
    limit?: number;
    search?: string;
    farmName?: string;
    status?: string;
    month?: string;
    crop?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}
