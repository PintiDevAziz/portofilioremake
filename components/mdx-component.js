import Pre from "../components/Pre";
export const mdxComponents = {
  h1: (props) => <h1 className=" text-5xl my-3 font-semibold" {...props} />,
  h2: (props) => <h2 className=" text-4xl my-3 font-semibold" {...props} />,
  h3: (props) => <h3 className=" text-3xl my-3 font-semibold" {...props} />,
  h4: (props) => <h4 className=" text-2xl my-3 font-semibold" {...props} />,
  h5: (props) => <h5 className=" text-xl my-3 font-semibold" {...props} />,
  h6: (props) => <h6 className=" text-lg my-3 font-semibold" {...props} />,
  a: (props) => <a className="text-[cyan]" {...props} />,
  hr: (props) => <hr className="mb-4" {...props} />,
  img: (props) => <img className="mx-auto" {...props} />,
  p: (props) => <p {...props} />,
  pre: ({ children }) => <Pre {...children.props} />,
  ul: (props) => <ul className=" leading-10 ml-4" {...props} />,
  ol: (props) => <ol className=" leading-10 ml-4" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-gray-400 pl-2" {...props} />
  ),
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  inlineCode: (props) => <code color="primary" fontSize="xl" {...props} />,
};
