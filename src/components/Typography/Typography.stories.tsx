import { Typography } from './Typography.tsx';
import {StoryObj, Meta} from "@storybook/react";

const meta = {
  title: 'Atoms/Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  // argTypes: {
  // },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "H1 content",
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: "H2 content",
    variant: 'h2',
  },
};