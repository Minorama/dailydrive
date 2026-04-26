import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { Tooltip } from './tooltip';

const meta = {
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
