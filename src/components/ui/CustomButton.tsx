import Link from 'next/link';
import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    target?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
};

const CustomButton = ({
    children,
    href,
    target,
    onClick,
    variant = 'primary',
    className = '',
}: ButtonProps) => {
    const baseStyles =
        'px-6 py-3 font-semibold rounded-md text-center transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';

    const variantStyles = {
        primary: 'bg-accent text-background hover:bg-opacity-90',
        secondary: 'border-2 border-accent text-accent hover:bg-accent hover:text-background',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        if (target) {
            return (
                <Link href={href} className={combinedClassName} target={target}>
                    {children}
                </Link>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
};

export default CustomButton ;