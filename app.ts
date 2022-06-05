// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Max'

// // unkown型は何が値に入るか保証されていないので
// // 決まった型に代入するにはif文が必要
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// // userInputがanyであれば、TSは型チェックを
// // 行わないため代入できる

// returnが絶対にないことを明示的に伝える
// 例外の発生によってコード自体が止まるため undefinedも返さない
// 指定がない場合anyが推論される neverは後から実装された型だからである
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code}
}

const result = generateError('エラーが発生しました', 500);
console.log(result)