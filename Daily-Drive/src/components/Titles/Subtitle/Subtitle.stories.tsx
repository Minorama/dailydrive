import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { Subtitle } from './Subtitle';

const meta = {
    component: Subtitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Subtitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'This is subtitle',
    },
};
