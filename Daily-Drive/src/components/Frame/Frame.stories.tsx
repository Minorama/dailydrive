import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { Frame } from './Frame';

const meta = {
    component: Frame,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Frame>;

export default meta;

type Story = StoryObj<typeof meta>;

const child = <p className="text-white">This is some text</p>;

export const Default: Story = {
    args: {
        children: child,
    },
};
