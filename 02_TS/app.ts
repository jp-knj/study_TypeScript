// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
// if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//   throw new Error('入力ちが正しくありません');
//
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return n1 + n2;
//   }
// }

// let number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result: ';

// add(number1, number2, printResult, resultPhrase);

// 明示的に型を指定するのはベストプラクティスではない
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'yuta',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// person.role.push('admin');
// person.role[1] = 10;

person.role = [0, 'admin', 'kenji'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// ネストしたObjectの型も定義できる
// TypeScriptに型を推論を任せるのがベストプラクティス
const product = {
  id: 'abc1',
  price: '12.99',
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
