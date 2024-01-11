import React from 'react';
interface ButtonProps {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    label?: string | number;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    format?: 'standard' | 'outline' | undefined;
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
    icon?: string;
    iconClassName?: string;
    iconSize?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    element?: React.ElementType;
    [x: string]: unknown;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
