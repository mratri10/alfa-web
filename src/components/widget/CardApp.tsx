import React from "react";

interface CardAppProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "basic" | "elevated" | "outlined" | "interactive";
    padding?: "none" | "sm" | "md" | "lg";
}

const CardApp: React.FC<CardAppProps> = ({
    children,
    className = "",
    variant = "elevated",
    padding = "md",
    ...props
}) => {
    const baseStyles = "rounded-2xl overflow-hidden bg-white transition-all duration-300";

    const variants = {
        basic: "",
        elevated: "shadow-xl shadow-emerald-900/5 ring-1 ring-black/5",
        outlined: "border border-gray-200",
        interactive: "shadow-lg shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1 cursor-pointer ring-1 ring-black/5",
    };

    const paddings = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div
            className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default CardApp;
