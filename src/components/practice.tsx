import { ReadMe } from './read-me';

interface Props {
  readme: string;
}

export const Practice = ({ readme }: Props) => (
  <>
    <h1>Other stuff....</h1>
    <ReadMe markdown={readme} />
  </>
);
