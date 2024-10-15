// console.log("satu");
// console.log("dua");
// console.log("tiga");

// console.log("satu");
// const tampilTiga = () => { console.log("tiga") };
// const tampilDua = (callback) => { console.log("dua"); callback(); };

// setTimeout(() => {
//   tampilDua(tampilTiga)
// }, 2000);

// console.log("satu");
// setTimeout(() => {
//   console.log("dua")
//   console.log("tiga")
// }, 2000);

console.log("satu");

setTimeout(() => {
  console.log("dua")
}, 2000);

console.log("tiga")

// function calculate(param1, param2, callback) {
//   let result = param1 + param2;

//   if(typeof callback == 'function') {
//     result = callback(param1, param2);
//   }

//   return result
// }

// let resultA = calculate(2000, 4000, function(x, y) { return "$ " + ( x + y )})
// let resultB = calculate(7000, 2, function(x, y) { return "Rp " + ( x * y )})

// console.log(resultA);
// console.log(resultB);