// const getTip = (amount) => {
//   if (typeof amount === "number") {
//     return amount * 0.25;
//   } else {
//     throw Error("Argument must be a number");
//   }
// };

// try {
//   const result = getTip(100);
//   console.log(`Your tip: £${result}`);
// } catch (e) {
//   console.log("catch block is running");
// }
const gradeCalc = function (studentScore, maxScore = 20) {
  if (typeof studentScore && typeof maxScore === "number") {
    const percentage = (studentScore / maxScore) * 100;
    let letterGrade = "";

    if (percentage >= 90) {
      letterGrade = "A";
    } else if (percentage >= 80) {
      letterGrade = "B";
    } else if (percentage >= 70) {
      letterGrade = "C";
    } else if (percentage >= 60) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
    return `You got ${percentage}%, which is a ${letterGrade}`;
  } else {
    throw Error("pleae provide numbers only");
  }
};

try {
  let grade = gradeCalc(true, false);
  console.log(grade);
} catch (e) {
  console.log(e.message);
}
