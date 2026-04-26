import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../App.css';

import { PodcastSquare } from './PodcastSquare';

const meta = {
    component: PodcastSquare,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PodcastSquare>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onRemove: () => {},
    },
};
