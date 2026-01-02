import React from "react";

interface AlertAppProps {
    title?: string;
    message: string;
    type?: "info" | "success" | "warning" | "error";
    className?: string;
    onClose?: () => void;
}

const AlertApp: React.FC<AlertAppProps> = ({
    title,
    message,
    type = "info",
    className = "",
    onClose,
}) => {
    const styles = {
        info: "bg-blue-50 text-blue-800 border-blue-200",
        success: "bg-emerald-50 text-emerald-800 border-emerald-200",
        warning: "bg-amber-50 text-amber-800 border-amber-200",
        error: "bg-red-50 text-red-800 border-red-200",
    };

    const iconStyles = {
        info: "text-blue-500",
        success: "text-emerald-500",
        warning: "text-amber-500",
        error: "text-red-500",
    };

    const icons = {
        info: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        success: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        warning: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };

    return (
        <div className={`flex items-start p-4 rounded-xl border ${styles[type]} ${className} animate-slideIn`} role="alert">
            <div className={`shrink-0 ${iconStyles[type]}`}>
                {icons[type]}
            </div>
            <div className="ml-3 flex-1">
                {title && <h3 className={`text-sm font-semibold mb-1 ${styles[type].split(' ')[1]}`}>{title}</h3>}
                <div className={`text-sm opacity-90 ${styles[type].split(' ')[1]}`}>
                    {message}
                </div>
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 focus:ring-2 focus:ring-offset-2 hover:bg-black/5 transition-colors ${styles[type].split(' ')[1]}`}
                >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default AlertApp;
