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
  return "";
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

// Problem 02: Handle unknown types of input then check is it string or array and check its length based on type then return a output

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

const users = [
  { id: 1, name: "Hasib", age: 18 },
  { id: 2, name: "Rahim", age: 22 },
  { id: 3, name: "Karim", age: 25 },
];

console.log(getLength("hello world"));
console.log(getLength(users));
