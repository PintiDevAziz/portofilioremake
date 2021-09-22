export const mdxComponents = {
  h1: (props) => <h1 className="bg-red-500 text-xl text-black" {...props} />,
  a: (props) => (
    <a color="primary" _hover={{ textDecoration: "underline" }} {...props} />
  ),
  hr: (props) => <hr {...props} />,
  p: (props) => <p variant="text.paragraph" {...props} />,
  ul: (props) => <ul variant="list.unordered" {...props} />,
  ol: (props) => <ol variant="list.ordered" {...props} />,
  blockquote: (props) => <blockquote className="border-r-4" {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  inlineCode: (props) => <code color="primary" fontSize="xl" {...props} />,
};
