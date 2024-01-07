import type { Meta, StoryObj } from '@storybook/react';

import {SquareSetDisplay} from "../components/SquareSetDisplay.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Sudoku/SquareSet',
    component: SquareSetDisplay,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        val: { control: 'number' },
        highlight: { control: 'boolean' },
        fromUser: { control: 'boolean' },
    },
} satisfies Meta<typeof SquareSetDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Valued: Story = {
    args: {
        val: 1,
        highlight: false,
        fromUser: true,
    },
};

export const Highlight: Story = {
    args: {
        val: 2,
        highlight: true,
        fromUser: true,
    },
};

export const Calculated: Story = {
    args: {
        val: 3,
        highlight: false,
        fromUser: false,
    },
};


export const CalculatedHighlight: Story = {
    args: {
        val: 4,
        highlight: true,
        fromUser: false,
    },
};


