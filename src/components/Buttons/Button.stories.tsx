import { Button } from './Button.tsx';
import {StoryObj, Meta} from "@storybook/react";

const meta = {
  title: 'Atoms/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'contained',
    disabled: false,
    children: 'Button',
  },
};
