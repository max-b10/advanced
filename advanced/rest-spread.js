"use strict";

// // Using spread with arrays:
// const printTeam = (team, coach, firstPlayer, secondPlayer) => {
//   console.log(`Team: ${team}`);
//   console.log(`Coach: ${coach}`);
//   console.log(firstPlayer, secondPlayer);
// };
// const team = {
//   name: "Liberty",
//   coach: "Casey Penn",
//   players: ["Marge", "Aiden", "Herbert", "Sherry"],
// };
// printTeam(team.name, team.coach, ...team.players);

// const cities = ["Barca", "Paris", "London"];
// const citiesCopy = [...cities];
// citiesCopy.push("Lisbon");
// console.log(cities, citiesCopy);

// // Without Rest:
// // This would return 50, despite the average of the four
// //numbers provided equalling 63.
// const calculateAverage1 = (numOne, NumTwo) => {
//   return (numOne + NumTwo) / 2;
// };
// const average1 = calculateAverage1(0, 100, 88, 64);
// console.log(average1);

// // With Rest:
// // Correctly returns 63.
// const calculateAverage2 = (...numbers) => {
//   let sum = 0;
//   numbers.forEach((num) => (sum += num));
//   return sum / numbers.length;
// };
// const average2 = calculateAverage2(0, 100, 88, 64);
// console.log(average2);

// // With separate parameter('thing') prior to Rest:
// const calculateAverage3 = (thing, ...numbers) => {
//   let sum = 0;
//   numbers.forEach((num) => (sum += num));
//   const grade = sum / numbers.length;
//   return `The average ${thing} is ${grade}`;
// };
// const average3 = calculateAverage3("age", 0, 100, 88, 64);
// console.log(average3);

// // Another example:
// const printTeam = (team, coach, ...players) => {
//   return `Team: ${team}, Coach: ${coach} and the Players: ${players.join(
//     ", "
//   )}`;
// };
// console.log(
//   printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry")
// );

// // Using spread with objects:
// let house = {
//   bedrooms: 2,
//   bathrooms: 1,
//   yearBuilt: 2017,
// };
// let newHouse = { basement: true, ...house, bedrooms: 3 };

// console.log(house);
// console.log(newHouse);

const person = {
  name: "Bob",
  age: 40,
};
const location = {
  city: "London",
  country: "UK",
};
const overview = { ...person, ...location };
console.log(overview);
