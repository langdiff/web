import "../styles/globals.css"; // We need to import our styles to apply to Stories
import * as NextImage from "next/image";

function useUnoptimizedNextImagesInStories() {
  const OriginalNextImage = NextImage.default;

  Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
  });
}

useUnoptimizedNextImagesInStories();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
