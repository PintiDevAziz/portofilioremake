import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
const Component = ({ children, className }) => {
  const lang = className.split("-")[1];
  return (
    <div className="relative">
      <SyntaxHighlighter language={lang} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
export default Component;
