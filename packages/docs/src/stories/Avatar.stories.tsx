/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@andradeleo-ignite-ui/react";

export default {
	title: "Data display/Avatar",
	component: Avatar,
	args: {
		src: "https://github.com/andradeleo.png",
		alt: "Leonardo Andrade",
	},
	argTypes: {
		src: {
			control: {
				type: "text",
			},
		},
	},
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
};
