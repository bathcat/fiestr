import { Color } from "./color";


interface Props {
  setColor(color: Color): void;
  color: Color;
}

export const ColorPicker = (props: Props) => (
  <select
    value={props.color}
    onChange={event => props.setColor(event.target.value as Color)}
  >
    <option value={Color.Black}>Black</option>
    <option value={Color.Brown}>Brown</option>
    <option value={Color.Red}>Red</option>
    <option value={Color.Blue}>Blue</option>
  </select>
);
