import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { PlaylistCard } from './PlaylistCard';

const meta = {
    component: PlaylistCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlaylistCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'This is the title',
        description: 'This is the description',
    },
};
