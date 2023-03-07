import { isOdd } from "@nx-integrated/is-odd";

export function isEvenUsingOddName(): string {
  return 'is-even-using-odd';
}


export function isEvenUsingOdd(value: number) {
	return !isOdd(value);
}
