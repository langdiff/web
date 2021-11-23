import CodeSnippet from "../components/CodeSnippet";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/CodeSnippet",
  component: CodeSnippet,
  args: {
    language: "c#",
    tags: ["test", "if-statement"],
  },
} as ComponentMeta<typeof CodeSnippet>;

const Template: ComponentStory<typeof CodeSnippet> = (args) => (
  <CodeSnippet {...args} />
);

export const Default = Template.bind({});

export const SnippetV2 = () => {
  return (
    <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
      <pre className="language-html">
        <code className="language-html">
          <span className="token doctype">
            <span className="token punctuation">&lt;!</span>
            <span className="token doctype-tag">doctype</span>{" "}
            <span className="token name">html</span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>html
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>head
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>meta
            </span>{" "}
            <span className="token attr-name">charset</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>UTF-8
              <span className="token punctuation">"</span>
            </span>{" "}
            <span className="token punctuation">/&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>meta
            </span>{" "}
            <span className="token attr-name">name</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>viewport
              <span className="token punctuation">"</span>
            </span>{" "}
            <span className="token attr-name">content</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>width=device-width,
              initial-scale=1.0<span className="token punctuation">"</span>
            </span>{" "}
            <span className="token punctuation">/&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>link
            </span>{" "}
            <span className="token attr-name">href</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>/path/to/tailwind.css
              <span className="token punctuation">"</span>
            </span>{" "}
            <span className="token attr-name">rel</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>stylesheet
              <span className="token punctuation">"</span>
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token comment">&lt;!-- ... --&gt;</span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;/</span>head
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>body
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token comment">&lt;!-- ... --&gt;</span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;/</span>body
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;/</span>html
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
        </code>
      </pre>
    </div>
  );
};
