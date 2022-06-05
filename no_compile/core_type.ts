// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; 

// } = {
//   name: "りょうた",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// let array: string[]
// array = ['String']

// console.log(person.name)

// for (let hobby of person.hobbies) {
//   console.log(hobby)
// }

// let role = [number, string]
// const hoge: {
//   role: [number, string]
// } = {
//   role: [1, 'string']
// }

// enum(カスタム型)
// Roleという独自の型を定義する
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "りょうた",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
  console.log('読み取り専用USER')
}