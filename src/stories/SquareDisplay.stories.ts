import type { Meta, StoryObj } from '@storybook/react';

import { SquareDisplay } from '../components/SquareDisplay.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Sudoku/Square',
    component: SquareDisplay,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        userSet: { control: 'number' },
        present: { control: 'number' },
        highlight: { control: 'number' },
    },
} satisfies Meta<typeof SquareDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Valued: Story = {
    args: {
        userSet: 1,
        present: null,
        allowed: [1],
        highlight: null,
        tabIndex: -1,
    },
};

export const TopRow: Story = {
    args: {
        userSet: null,
        present:  null,
        allowed: [1,2,3],
        highlight: null,
        tabIndex: -1,
    },
};

export const LeftRow: Story = {
    args: {
        userSet: null,
        present:  null,
        allowed: [1,4,7],
        highlight: null,
        tabIndex: -1,
    },
};

export const Diagonal: Story = {
    args: {
        userSet: null,
        present:  null,
        allowed: [1,5,9],
        highlight: null,
        tabIndex: -1,
    },
};

export const Corners: Story = {
    args: {
        userSet: null,
        present:  null,
        allowed: [1,3,9],
        highlight: null,
        tabIndex: -1,
    },
};
