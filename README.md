## **Interview question answer**

## **Q/N: 01: What are some differences between `interfaces` and `types` in TypeScript?**

Answer: TypeScript-এ interface এবং type alias অনেকটা একই ধরনের কাজ করে, তবে কিছুটা পার্থক্য আছে:

- `Interface` মূলত `Object structure` তৈরিতে সাহায্য করে। `Interface` দিয়ে সহজে `Object` কে `extend` করা যায়।
- `Type Alias`: `variable`, `union`, `primitive`, `object` ইত্যাদি define করতে সহায়তা করে।

## **Q/N: 02: What is the use of the `keyof` keyword in `TypeScript`? Provide an example.**

Answer: `keyof` keyword TypeScript এ Object এ Property Name গুলোকে Union Type আকারে বের করতে ব্যবহার হয়। আবার keyof এ মাধ্যমে function এ ‍শুধু মাত্র valid Key সহ input নিতে বাধ্য করা যায়।

**Example**

```TypeScript

type Person = {
  name: string;
  age: number;
};

keyof Person

//Output "name" | "age"

```

```TypeScript

type User = {
  username: string;
  email: string;
  age: number;
};

function getValue(obj: User, key: keyof User) {
  return obj[key];
}

const user: User = { username: "Hasibur Rahman", email: "mdhasiburrahman.me@gmail.com", age: 19 };

getValue(user, "username");   // valid
getValue(user, "email");   // valid
getValue(user, "age");     // valid
getValue(user, "address"); // error — কারণ keyof এ নেই
```
