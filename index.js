let f = 5;
let t = 3;

for(let i = 1; i < 51; i++) {
  if(i % 5 === 0) {
    console.log("buzz")
  } else if(i % 3 === 0) {
    console.log("fizz")
  } else if(i % 3 === 0 && i % 5 ===0) {
    console.log("fizzbuzz")
  } else {
    console.log(i);
  }
}