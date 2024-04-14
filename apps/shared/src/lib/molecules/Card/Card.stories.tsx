import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'molecules/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    text: 'Text',
    srcImage:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    type: '',
  },
};
