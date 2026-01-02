import React from "react";

interface InputAppProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const InputApp: React.FC<InputAppProps> = ({
    label,
    error,
    helperText,
    className = "",
    id,
    ...props
}) => {
    const inputId = id || React.useId();

    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`
          block w-full rounded-xl border px-4 py-2.5 text-gray-900 shadow-sm transition-colors duration-200 placeholder:text-gray-400
          focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20
          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 hover:border-gray-300"}
          ${className}
        `}
                {...props}
            />
            {error && <p className="text-xs text-red-500 animate-fadeIn">{error}</p>}
            {!error && helperText && <p className="text-xs text-gray-500">{helperText}</p>}
        </div>
    );
};

export default InputApp;
