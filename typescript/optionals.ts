/*
 *  Tutorial: No BS TS #5 - Optionals in Typescript
 *  URL: https://www.youtube.com/watch?v=QvcyL_ZGhf0
 *  Command: ts-node .\optionals.ts
 */

// Optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// Coalescent (??) operator
function getEmail(user: User): string {
  if (user.info) {
    return user.info.email;
  }
  return '';
}

// ?? means coalescent operator and returns '' if undefined
function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

// Using callbacks
function addWithCallBack(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // only call the callback if exists
  callback?.();
}
