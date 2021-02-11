// const square = (a) => a * a;

// const squareLong = (a) => {
//   return a * a;
// };

// console.log(square(5));
// console.log(squareLong(5));

const people = [
  {
    name: "Bob",
    age: 27,
  },
  {
    name: "Bill",
    age: 31,
  },
  {
    name: "Baz",
    age: 22,
  },
];

// const under30 = people.filter(function (person) {
//   return person.age < 30;
// });
const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const age22 = people.find((person) => person.age === 22);
console.log(age22.name);
