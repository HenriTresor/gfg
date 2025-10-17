import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    private handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <AlertTriangle className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
                                    <p className="text-gray-600">An unexpected error occurred</p>
                                </div>
                            </div>

                            {import.meta.env.DEV && this.state.error && (
                                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Error Details:</h3>
                                    <pre className="text-xs text-red-600 overflow-auto">
                                        {this.state.error.toString()}
                                    </pre>
                                    {this.state.errorInfo && (
                                        <details className="mt-2">
                                            <summary className="text-xs text-gray-600 cursor-pointer">
                                                Component Stack
                                            </summary>
                                            <pre className="text-xs text-gray-600 mt-2 overflow-auto">
                                                {this.state.errorInfo.componentStack}
                                            </pre>
                                        </details>
                                    )}
                                </div>
                            )}

                            <div className="flex space-x-3">
                                <button
                                    onClick={this.handleReset}
                                    className="btn-primary"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={this.handleReload}
                                    className="btn-secondary"
                                >
                                    Reload Page
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

