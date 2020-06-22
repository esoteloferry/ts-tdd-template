import { square } from "./entities/square";
import { cubic } from "./entities/cubic";

export function main(n: number): string {
  const squareResult = square(n);
  const cubicResult = cubic(n);
  return `Result square is ${squareResult} and cubic is ${cubicResult}`;
}

console.log(main(2));
console.log(main(3));
