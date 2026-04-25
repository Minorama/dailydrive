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
    return <div className={`flex bg-grey-900 ${className}`}>{children}</div>;
};

export { BaseCard };
