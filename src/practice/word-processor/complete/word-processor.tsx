import { useState } from 'react';
import { ColorPicker } from './color-picker';
import { TextArea } from './text-area';
import { countWords } from './count-words';
import { WordCount } from './word-count';
import { Heading } from './heading';
import { Color } from './color';

export const WordProcessor = () => {
  const [contents, setContents] = useState('');
  const [color, setColor] = useState(Color.Red);

  return (
    <div className="p-4">
      <Heading>
        Word Processor <i>[Complete]</i>
      </Heading>
      <div>
        <WordCount value={countWords(contents)} />
        <ColorPicker
          color={color}
          setColor={setColor}
        />
      </div>
      <TextArea
        color={color}
        contents={contents}
        setContents={setContents}
      />
    </div>
  );
};
