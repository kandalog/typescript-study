
// function Logger(log: string) {
//   return function(constructor: Function) {
//     console.log(log)
//     console.log(constructor)
//   }
// }

// function WithTemplate(template: string, hookId: string) {
//   return function(_: Function) { 
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       console.log("ほいさほいさ!!")
//       hookEl.innerHTML = template
//     }
//   }
// }

// @Logger("ログを出力中")
// @WithTemplate("<h1>Personオブジェクト</h1>", "app")
// class Person {
//   name = "Max"

//   constructor() {
//     console.log("personオブジェクトを作成中...")
//   }
// }

// const pers = new Person();
// console.log(pers)

// // ---

// function Log(target: any, propertyName: string | Symbol) {

// }


// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   set price(val: number) {
//     if (val > 0) {
//       this.price = val
//     } else {
//       throw new Error('不正な価格です -0以下は設定できません');
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p
//   }

//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }



// 下記のようにreturnしたclass内の処理は、
// インスタンス化した際に実行される
function Logger(log: string) {
  return function<T extends {new(...args: any[]): {}}>(originalconstructor: T) {
    // 元のconstructor関数を引き継げる
    return class extends originalconstructor {
      constructor(...args: any[]) {
        super()
        console.log(log)
      }  
    }
  }
}