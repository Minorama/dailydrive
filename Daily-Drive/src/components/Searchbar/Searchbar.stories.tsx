import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../App.css';

import { SearchBar } from './Searchbar';

const meta = {
    component: SearchBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Search for something',
    },
};
