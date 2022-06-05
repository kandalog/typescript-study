// const add = (num1:number, num2:number) => num1 + num2
// let func: (a: number, b: number) => number;
// func = add;
// console.log(add(8,10))

// 引数を一つだけ取る関数がcallbackに入る
// callbackの引数は第1引数と第2引数を合計した値が自動で入る
// それを実行する (実行されて行われる処理は呼び出し時に決めることができる)
function hoge(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result)
}

hoge(10, 20, (result) => {
  console.log(result)
})