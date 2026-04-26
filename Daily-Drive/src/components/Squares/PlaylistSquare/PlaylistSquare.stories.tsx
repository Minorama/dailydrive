import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { PlaylistSquare } from './PlaylistSquare';

const meta = {
    component: PlaylistSquare,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlaylistSquare>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onRemove: () => {},
        image: '',
    },
};
