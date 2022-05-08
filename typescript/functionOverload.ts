/*
 *  Tutorial: No BS TS #4 - Function Overloading in Typescript
 *  URL: https://www.youtube.com/watch?v=XnyZXNnWAOA
 *  Command: ts-node .\functionOverload.ts
 */

// Challenge: overload a function that can take 3 types of arguments

// Let's create an interface that will be used as arg
interface Coordinate {
  x: number;
  y: number;
}

// Create the overloaded functions without an implementation
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// Now lets create the actual implementation
// Note: 'unknown' type works like 'any' except that when used, TypeScript enforces a type check so we need to use casting.
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  // This type check occurs during runtime
  if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate('x:1,y:2'));
console.log(parseCoordinate({ x: 1, y: 2 }));
console.log(parseCoordinate(1, 2));
