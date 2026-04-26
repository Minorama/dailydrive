import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { PreviewCard } from './PreviewCard';

const meta = {
    component: PreviewCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PreviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Preview podcast Title',
        artist: 'A podcast maker',
    },
};

export const Song: Story = {
    args: {
        title: 'Preview song title',
        artist: 'Artist',
        album: 'Album',
    },
};
