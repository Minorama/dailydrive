import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { Searchbar } from './Searchbar';

const meta = {
    component: Searchbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Searchbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
