import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { Toaster } from './sonner';

const meta = {
    component: Toaster,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
