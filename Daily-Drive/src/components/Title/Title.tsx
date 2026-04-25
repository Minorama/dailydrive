import { type ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    className?: string;
}

const Title = ({ children, className }: TitleProps) => {
    return <h1 className={`text-white font-extrabold ${className}`}>{children}</h1>;
};

export { Title };
