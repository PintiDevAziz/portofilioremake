import Pre from "../components/Pre";
export const mdxComponents = {
  h1: (props) => <h1 className="bg-red-500 text-xl text-black" {...props} />,
  a: (props) => <a {...props} />,
  hr: (props) => <hr {...props} />,
  p: (props) => <p {...props} />,
  pre: ({ children }) => <Pre {...children.props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  blockquote: (props) => <blockquote className="border-r-4" {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  inlineCode: (props) => <code color="primary" fontSize="xl" {...props} />,
};
