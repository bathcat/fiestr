# Use-Frozen-State

## Background

You interns, who are well-meaning, but often stupid have introduced
a bug into your brilliant number incrementing software.

## Goals

1. Fix the bug
2. Create your own version of `useState` to prevent such problems in
   the future. Use the type system-- i.e. [Readonly](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)

## Stretch Goals

1. Enforce immutability at runtime via [**Object.freeze**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).
2. Write unit tests to make sure nested objects are also frozen.
3. Since **Object.freeze** has a runtime performance cost, find a way do disable freezing for production builds.

## Reading List

- https://learntypescript.dev/10/l5-deep-immutable
