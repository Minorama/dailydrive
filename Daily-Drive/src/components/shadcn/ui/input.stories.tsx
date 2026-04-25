import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { Input } from './input';

const meta = {
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Placeholder Text',
    },
};
export const WithValue: Story = {
    args: {
        value: 'Hello world',
    },
};
