/*
 *  Tutorial: No BS TS #6 - Tuples in Typescript
 *  URL: https://www.youtube.com/watch?v=5q0VtzJjvNc
 *  Command: ts-node .\tuples.ts
 */

// Simple example where we have a function that calculates the sum of two 3D points
type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([1, 2, 3], [10, 20, 30]));

// Another example more in of a context of React with a sort of a useState hook implementation
function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      // take a string and set that string value as the incoming string
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState('hello');
console.log(str1getter());
str1setter('goodbye');
console.log(str1getter());
