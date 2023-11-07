import { useState } from "react";

interface TextAreaProps {
  color: string;
  text: string;
  setText: (newText: string) => void;
}
const WordCount = (props:{count:number}) =>
  <h1>Word count: {props.count}</h1>;

const TextArea = (props: TextAreaProps) => 
    <textarea
      value={props.text}
      onChange={e => props.setText(e.target.value)}
      style={{color:props.color}}
    />;

type Color = 'red' | 'black' | 'skyblue';

interface ColorPickerProps{
  setColor:(c:Color)=>void;
  color:Color;
}
export const ColorPicker = (props: ColorPickerProps) => (
  <select
    value={props.color}
    onChange={event => props.setColor(event.target.value as Color)}
  >
    <option value={'black'}>Black</option>
    <option value={'red'}>Red</option>
    <option value={'skyblue'}>Sky blue</option>
  </select>
);


export const WordProcessor = () => {
  const [color, setColor] = useState<Color>('black');
  const [text, setText] = useState('');

  return (
    <div className='p-3'>
      <h1 className="">
        Word Processor
      </h1>
      <WordCount count={text.split(' ').length}/>
      <ColorPicker setColor={setColor} color={color}/>
      <TextArea text={text} setText={setText} color={color}/>
      
    </div>
  );
};
