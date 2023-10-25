import { ReadMe } from '@components/read-me';
import markdown from '../../README.md?raw';

export const HomePage = () => <ReadMe markdown={markdown} />;
