import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { BlockText } from './BlockText';

const meta = {
    component: BlockText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BlockText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'This is some text',
    },
};
