import type { Meta, StoryObj } from "@storybook/react-vite";

import { Task } from "./Task";

const meta = {
  component: Task,
  title: "Task",
  globals: {
    backgrounds: { value: "dark", grid: false }, // this does not go into the documentation, but sets the default background for the stories
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InboxTask: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2023, 0, 1, 9, 0),
      boardName: "On Test Board",
    },
  },
};

export const SnoozedTask: Story = {
  args: {
    task: {
      // Shaping the stories through args composition.
      ...InboxTask.args?.task,
      state: "TASK_SNOOZED",
    },
  },
};

export const PinnedTask: Story = {
  args: {
    task: {
      // Shaping the stories through args composition.
      ...InboxTask.args?.task,
      state: "TASK_PINNED",
    },
  },
};
