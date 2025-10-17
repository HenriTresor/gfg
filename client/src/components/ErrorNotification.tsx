import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    duration?: number;
}

interface NotificationContextType {
    showNotification: (type: NotificationType, message: string, duration?: number) => void;
    showError: (message: string, duration?: number) => void;
    showSuccess: (message: string, duration?: number) => void;
    showWarning: (message: string, duration?: number) => void;
    showInfo: (message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within NotificationProvider');
    }
    return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const removeNotification = useCallback((id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const showNotification = useCallback(
        (type: NotificationType, message: string, duration = 5000) => {
            const id = Math.random().toString(36).substr(2, 9);
            const notification: Notification = { id, type, message, duration };

            setNotifications((prev) => [...prev, notification]);

            if (duration > 0) {
                setTimeout(() => {
                    removeNotification(id);
                }, duration);
            }
        },
        [removeNotification]
    );

    const showError = useCallback((message: string, duration?: number) => {
        showNotification('error', message, duration);
    }, [showNotification]);

    const showSuccess = useCallback((message: string, duration?: number) => {
        showNotification('success', message, duration);
    }, [showNotification]);

    const showWarning = useCallback((message: string, duration?: number) => {
        showNotification('warning', message, duration);
    }, [showNotification]);

    const showInfo = useCallback((message: string, duration?: number) => {
        showNotification('info', message, duration);
    }, [showNotification]);

    const getIcon = (type: NotificationType) => {
        switch (type) {
            case 'success':
                return <CheckCircle className="w-5 h-5 text-green-600" />;
            case 'error':
                return <AlertCircle className="w-5 h-5 text-red-600" />;
            case 'warning':
                return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
            case 'info':
                return <Info className="w-5 h-5 text-blue-600" />;
        }
    };

    const getStyles = (type: NotificationType) => {
        switch (type) {
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800';
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            case 'info':
                return 'bg-blue-50 border-blue-200 text-blue-800';
        }
    };

    return (
        <NotificationContext.Provider
            value={{ showNotification, showError, showSuccess, showWarning, showInfo }}
        >
            {children}
            <div className="fixed top-4 right-4 z-50 space-y-2">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`max-w-md w-full rounded-lg border shadow-lg p-4 flex items-start space-x-3 animate-slide-in ${getStyles(
                            notification.type
                        )}`}
                    >
                        <div className="flex-shrink-0">{getIcon(notification.type)}</div>
                        <div className="flex-1">
                            <p className="text-sm font-medium">{notification.message}</p>
                        </div>
                        <button
                            onClick={() => removeNotification(notification.id)}
                            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

