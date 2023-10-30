'use strict';
import { useState } from 'react';

interface Holder<T>
  extends Readonly<{
    content: T;
  }> {}

export function useFrozenState<S>(
  initialState: S,
): [Holder<S>, setContent: (state: S) => void] {
  const [s, setS] = useState(initialState);
  const result = { content: s };
  Object.freeze(result);
  return [result, setS];
}
