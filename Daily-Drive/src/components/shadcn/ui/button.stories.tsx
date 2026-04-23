import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../tailwind.css'
 
import { Button } from './button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Click Me!'
  },
  
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click Me!'
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Click Me!'
  },
}

export const Negative: Story = {
  args: {
    variant: 'negative',
    children: 'Click Me!'
  },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Click Me!'
    }
}