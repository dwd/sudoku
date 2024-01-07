import type { Meta, StoryObj } from '@storybook/react';

import {SquareChoice} from "../components/SquareChoice.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Sudoku/SquareChoice',
    component: SquareChoice,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
} satisfies Meta<typeof SquareChoice>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TopRow: Story = {
    args: {
        allowed: [1,2,3],
        tabIndex: -1,
    },
};

export const LeftRow: Story = {
    args: {
        allowed: [1,4,7],
        tabIndex: -1,
    },
};

export const Diagonal: Story = {
    args: {
        allowed: [1,5,9],
        tabIndex: -1,
    },
};

export const Corners: Story = {
    args: {
        allowed: [1,3,9],
        tabIndex: -1,
    },
};
