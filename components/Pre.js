import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { useEffect, useState } from "react";
const Component = ({ children, className }) => {
  const lang = className.split("-")[1];
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);
  return (
    <div className="relative">
      <SyntaxHighlighter language={lang} style={dracula}>
        {children}
      </SyntaxHighlighter>
      <div className="absolute right-3 top-3">
        <CopyToClipboard text={children}>
          <button
            className="relative group text-[15px] font-semibold font-sans"
            onClick={() => setCopied(true)}
          >
            <div className="absolute bg-themeBlack top-8 px-1 py-1 left-1/2 -translate-x-1/2 group-hover:scale-100 scale-0 rounded border-2 border-white/50 transition-all w-[10rem]">
              {copied ? "Copied ✅ " : "Copy To ClipBoard"}
            </div>
            <HiOutlineClipboardCopy className="text-gray-400 text-2xl transition-all hover:text-white" />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default Component;
