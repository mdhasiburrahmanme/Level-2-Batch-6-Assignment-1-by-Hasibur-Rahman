## **Interview question answer**

## **Q/N: 01: What are some differences between `interfaces` and `types` in TypeScript?**

Answer: TypeScript-এ interface এবং type alias অনেকটা একই ধরনের কাজ করে, তবে কিছুটা পার্থক্য আছে:

- `interface` মূলত `Object structure` তৈরিতে সাহায্য করে। `interface` দিয়ে সহজে `Object` কে `extend` করা যায়। interface যদি একাধিকবার একই নামে declare করা হয় তাহলে TypeScript নিজেই সেগুলো merge করে দেয়।

- `Type Alias`: `variable`, `union`, `primitive`, `object` ইত্যাদি define করতে সহায়তা করে। interface এর মতো type একাধিকবার একই নামে declare করা যায় না। করলে সেটা error চলে আসে।

## **Q/N: 02: What is the use of the `keyof` keyword in `TypeScript`? Provide an example.**

Answer: `keyof` keyword TypeScript এ Object এ Property Name গুলোকে Union Type আকারে বের করতে ব্যবহার হয়। আবার keyof এ মাধ্যমে function এ ‍শুধু মাত্র valid Key সহ input নিতে বাধ্য করা যায়।

**Example**

```TypeScript
TypeScript

type Person = {
  name: string;
  age: number;
};

keyof Person

//Output "name" | "age"

```

```TypeScript
TypeScript

type User = {
  username: string;
  email: string;
  age: number;
};

function getValue(obj: User, key: keyof User) {
  return obj[key];
}

const user: User = { username: "Hasibur Rahman", email: "mdhasiburrahman.me@gmail.com", age: 19 };

getValue(user, "username");
getValue(user, "email");
getValue(user, "age");
getValue(user, "address"); // error — কারণ keyof এ নেই
```

## **Q/N: 03: Explain the difference between any, unknown, and never types in TypeScript.**

Answer: Difference between `any`, `unknown` and `never` types in TypeScript explained below.

-`Any` : TypeScript এ any type বলতে বুঝায় যে User এর input Type checking ছাড়াই গ্রহন করবে।

-`Unknown` : TypeScript e any এবং unknown প্রায় একই কাজ করে, তবুও ছোট কিন্তু গুরুত্বপূর্ন একটা পার্থক্য আছে যেমনঃ ‍any type checking ছাড়াই data input নিতে পারে কিন্তু unknown এর ক্ষেত্রে আগে অবশ্যই type check করতে হয় বা type define করতে হবে।

-`Never` : never এমন একটা টাইপ যে কোন value return করতে পারে না। সাধারণত error throw করে।
