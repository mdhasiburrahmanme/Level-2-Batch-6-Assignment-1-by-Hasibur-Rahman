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

function filterActiveUsers(users: Users[]): Users[] {
  return users.filter((users) => users.isActive === true);
}


