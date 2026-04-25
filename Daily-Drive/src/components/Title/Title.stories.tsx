import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { Title } from './Title';

const meta = {
    component: Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'This is a Title',
    },
};
