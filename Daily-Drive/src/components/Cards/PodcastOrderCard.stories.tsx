import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { PodcastOrderCard } from './PodcastOrderCard';

const meta = {
    component: PodcastOrderCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PodcastOrderCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'This is the title',
        description: 'This is the description',
        pinned: true
    },
};
