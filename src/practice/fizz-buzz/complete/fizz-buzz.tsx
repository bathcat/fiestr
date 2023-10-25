const toMessage = (n: number): string => {
  if (n < 1 || n > 100) {
    throw 'Out of range!';
  }
  if (n % 15 === 0) {
    return 'fizzbuzz';
  }
  if (n % 5 === 0) {
    return 'buzz';
  }
  if (n % 3 === 0) {
    return 'fizz';
  }
  return n.toString();
};

const getRange = (start: number, count: number): Array<number> =>
  [...Array(count)].map((_, i) => i + start);

const getMessages = () => getRange(1, 100).map(toMessage);

export const FizzBuzz = () => (
  <div className="prose">
    <h1>
      FizzBuzz <i>[Complete]</i>
    </h1>
    <ul>
      {getMessages().map(m => (
        <li>{m}</li>
      ))}
    </ul>
  </div>
);
