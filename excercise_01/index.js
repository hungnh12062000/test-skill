const arr = [
  78, 68, 132, 90, 11, 40, 24, 100, 99, 65, 32, 48, 68, 19, 03, 200, 405, 879,
  222, 6568, 68, 89, 90, 68, 9310, 2865, 6528, 68, 6802, 2068, 88, 68,
];
// const count = {};
// arr.forEach(function (x) {
//   count[x] = (count[x] || 0) + 1;
// });

let y = 68;
let count = arr.filter(x => x === y).length;
console.log("Id:", y , "có độ trễ task là:", count);
