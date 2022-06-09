class Person {
  private list: string[] = [];

  // 下記のように書くとthisへpushする
  // readonlyで読み取り専用
  constructor(private readonly name: string, public age: number) {

  }

  hello() {
    console.log(this.name)
  }
}

const bob = new Person("bob", 18)

bob.hello()