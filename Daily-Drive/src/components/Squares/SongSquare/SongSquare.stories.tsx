import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { SongSquare } from './SongSquare';

const meta = {
    component: SongSquare,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SongSquare>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onRemove: () => {},
    },
};
