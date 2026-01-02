import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const TextTheme = {
    Display: ({ children, className = "", as: Component = "h1", ...props }: TextProps) => (
        <Component
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950 ${className}`}
            {...props}
        >
            {children}
        </Component>
    ),
    Title: ({ children, className = "", as: Component = "h2", ...props }: TextProps) => (
        <Component
            className={`text-2xl md:text-3xl font-bold text-gray-900 ${className}`}
            {...props}
        >
            {children}
        </Component>
    ),
    Subtitle: ({ children, className = "", as: Component = "h3", ...props }: TextProps) => (
        <Component
            className={`text-xl font-semibold text-gray-800 ${className}`}
            {...props}
        >
            {children}
        </Component>
    ),
    Body: ({ children, className = "", as: Component = "p", ...props }: TextProps) => (
        <Component
            className={`text-base text-gray-600 leading-relaxed ${className}`}
            {...props}
        >
            {children}
        </Component>
    ),
    Caption: ({ children, className = "", as: Component = "span", ...props }: TextProps) => (
        <Component
            className={`text-sm text-gray-500 font-medium ${className}`}
            {...props}
        >
            {children}
        </Component>
    ),
    Label: ({ children, className = "", as: Component = "span", ...props }: TextProps) => (
        <Component
            className={`text-xs font-bold uppercase tracking-wider text-emerald-700 ${className}`}
            {...props}
        >
            {children}
        </Component>
    ),
};

export default TextTheme;
