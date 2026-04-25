import { type ReactNode } from 'react';

interface FrameProps {
    children: ReactNode;
}

const Frame = ({ children }: FrameProps) => {
    return <div className="flex h-full m-5 p-5 bg-grey-950">{children}</div>;
};

export { Frame };
