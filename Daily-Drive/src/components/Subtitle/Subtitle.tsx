import { type ReactNode } from 'react';

interface SubtitleProps {
    children: ReactNode;
    className?: string;
}

const Subtitle = ({ children, className }: SubtitleProps) => {
    return <p className={`text-grey-300 font-medium ${className}`}>{children}</p>;
};

export { Subtitle };
