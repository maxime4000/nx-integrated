import { isEven, isEvenName } from "@nx-integrated/is-even";
import { isEvenUsingOdd, isEvenUsingOddName } from "@nx-integrated/is-even-using-odd";
import { isOdd, isOddName } from "@nx-integrated/is-odd";

export function Main() {
  const v = 5;
  console.log(isEvenName(), isEven(v));
  console.log(isEvenUsingOddName(), isEvenUsingOdd(v));
  console.log(isOddName(), isOdd(v));
  return "Main() was executed!"
}
