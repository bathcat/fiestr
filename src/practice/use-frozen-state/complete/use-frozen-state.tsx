import { useState } from 'react';

interface Holder<T>
  extends Readonly<{
    content: T;
  }> {}

export function useFrozenState<S>(
  initialState: S,
): [Holder<S>, setContent: (state: S) => void] {
  const [s, setS] = useState(initialState);
  return [Object.freeze({ content: s }), setS];
}
