'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h2 className="text-lg font-semibold mb-2">Oops, there was an error!</h2>
          <p className="mb-2">Something went wrong. Please try again later or contact support if the problem persists.</p>
          {this.state.error && (
            <pre className="bg-red-50 p-2 rounded text-sm overflow-auto">
              {this.state.error.toString()}
            </pre>
          )}
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
