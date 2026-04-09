"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);

  } else if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) / 12;
  let s = amount - contribution;
  let monthlyPayment = s * (p + (p / (Math.pow(1 + p, countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  let result = Number(totalAmount.toFixed(2));

  return result;
}