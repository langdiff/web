import Nav from "../components/Nav";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
