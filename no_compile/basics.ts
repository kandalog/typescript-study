function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if(showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultFlase = 'Result: ';

add(number1, number2, printResult, resultFlase)