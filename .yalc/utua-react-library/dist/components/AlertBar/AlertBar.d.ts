import React from "react";
interface AlertBarProps {
    title: string;
    description?: string;
    iconVariant?: 'info' | 'check' | 'error' | 'warning';
    type?: 'light' | 'dark';
    IconClose: React.ElementType;
    IconNotification?: React.ElementType;
}
export declare const AlertBar: ({ title, description, IconClose, IconNotification: Icon, iconVariant, type }: AlertBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
