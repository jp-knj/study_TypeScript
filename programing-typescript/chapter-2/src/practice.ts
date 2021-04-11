// 問0
// const greeting = (value) => "hello!" + value

const greeting = (value: string) => "hello" + value;


// 問1
// interface Foo {
//     bar: string;
//     baz: number;
// }

// Fooが持つプロパティ全てoptionalにしてください

// type PartialFoo = Partial<Foo>;

// type Foo = {
//     name?: string;
//     age?: number;
// }

// type PartialFoo = Required<Foo>

// 問3

// type Foo = {
//     name?: string;
//     age?: number;
// }

// のFooからnameだけを取得したtypeを作ってください

// type Picked = Pick<Foo, 'name'>

// 問4

// type Foo = {
//     name?: string;
//     age?: number;
// }

// Fooからageを省略した型を作ってください

// type Omited = Omit<Foo, age>

// 問5

// const user = { name: "kenji", age: 98 };

// { name: string, age: number };

// Reason : それぞれの型がプリミティブになるため
