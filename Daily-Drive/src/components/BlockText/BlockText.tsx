import { type ReactNode } from 'react';

interface BlockTextProps {
    children: ReactNode;
}

const BlockText = ({ children }: BlockTextProps) => {
    return <p className="text-white font-light text-wrap">{children}</p>;
};

export { BlockText };
