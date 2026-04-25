// Title
// Image
// Subtext
// Icons
import { type ReactNode } from 'react';

interface BaseCard {
    children: ReactNode;
    className?: string;
}

const BaseCard = ({ children, className }: BaseCard) => {
    return (
        <div className={`flex bg-grey-900 rounded-2xl h-fit w-full ${className}`}>{children}</div>
    );
};

export { BaseCard };
