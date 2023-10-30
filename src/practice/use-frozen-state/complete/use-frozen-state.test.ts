import { test, assert} from 'vitest';
import { useFrozenState } from './use-frozen-state';
import { renderHook } from '@testing-library/react';


test('useFrozenState should freeze at runtime', () => {
  const {result} = renderHook(()=>useFrozenState(10));
  try {
    const nUnknown:any = result.current;
    nUnknown.content= 50;
  } catch (e:unknown) {
    console.log(`\n\n------\nError:${JSON.stringify(e)}\n\n--------\n`)
    return;
  }
  assert.fail("No error thrown.");
});


//
// Naive
//
// test('useFrozenState should freeze at runtime', () => {
//   const [ n, ] = useFrozenState(10);
//   try {
//     const nUnknown:any = n;
//     nUnknown.content= 50;
//   } catch {
//     return;
//   }
//   assert(false);
// });
