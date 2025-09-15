import React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
    <div
        className={`bg-white/70 backdrop-blur-md shadow-md ${className}`}
        {...props}
    />
);

export const CardContent: React.FC<CardProps> = ({
    className = "",
    ...props
}) => <div className={`p-4 ${className}`} {...props} />;

export default Card;