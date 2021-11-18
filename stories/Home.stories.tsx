import Home from "../pages/index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
