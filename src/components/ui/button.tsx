import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "default",
    className = "",
    ...props
}) => {
    const base = "px-4 py-2 rounded-md font-medium transition-colors";
    const variants: Record<string, string> = {
        default: "bg-purple-600 text-white hover:bg-purple-700",
        outline: "border border-purple-600 text-purple-600 hover:bg-purple-50",
    };

    return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;