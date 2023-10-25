import ReactMarkdown from 'react-markdown';

interface Props {
  markdown: string;
}

export const ReadMe = ({ markdown }: Props) => (
  <div className="prose lg:prose-xl p-4">
    <ReactMarkdown
      children={markdown}
      skipHtml
    />
  </div>
);
