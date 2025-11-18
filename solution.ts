// Problem 01: Handle unknown types of input then check is it string, number or boolean and return a output based on the type

function formatValue(
  value: string | number | boolean,
): string | number | boolean {
  if (typeof value === "string") {
    const output = value.toUpperCase();
    return output;
  } else if (typeof value === "number") {
    const output = value * 10;
    return output;
  } else if (typeof value === "boolean") {
    const output = !value;
    return output;
  }
}

// Problem 02: Handle unknown types of input then check is it string or array and check its length based on type then return a output

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}

// Problem 03: create a person class and assign name and age then create a method to get the details of the person

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Problem 04: Create an interface for an item with title and rating properties then create a function to filter items based on rating greater than or equal to 4

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

// Problem 05: Create a type for users with id, name, email and isActive properties then create a function to filter active users

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(user: Users[]): Users[] {
  return user.filter((users) => users.isActive === true);
}

// problem 06: Create an interface for a book with title, author, publishedYear and isAvailable properties then create a function to print book details

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`,
  );
}

//problem 07: Create a function that takes two arrays of numbers or strings and returns a new array containing only the unique values from both arrays

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[],
): (number | string)[] {
  const combined = [];

  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    combined.push(arr2[i]);
  }

  const unique: (number | string)[] = [];

  for (let i = 0; i < combined.length; i++) {
    let exists = false;

    for (let j = 0; j < unique.length; j++) {
      if (combined[i] === unique[j]) {
        exists = true;
      }
    }

    if (!exists) {
      unique.push(combined[i]);
    }
  }

  return unique;
}

// Problem 08: Create a type for a product with name, price, quantity and optional discount properties then create a function to calculate the total price of products considering the discount if available

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  const prices = products.map((product) => {
    const total = product.price * product.quantity;
    const discount = product.discount ?? 0;
    return total - (total * discount) / 100;
  });

  const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
  return totalPrice;
}
