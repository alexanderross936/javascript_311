const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 === 0){
  return true
} else {
  return false
}
}

const sum = (arr) => {
  // write code for numbers.sum
  let numbers = arr
  const fun = (total, num) => {
    return total + num
  }
  return numbers.reduce(fun, 0)
}

const comboSum = (arr, sum) => {
  //  let sum = 9;
  //  let arr = [1,2,3,4,5];
  let em = [];
for(var i = 0; i < arr.length; i++){
  let num1 = arr[i];
 // console.log(num1)
  for(var j =0; j < arr.length; j++){
    let num2 = arr[j];
   // console.log(num2)
    if(num1 + num2 === sum){
      em.push("true")
    } else {
      em.push("false")
    }
  }
}
let n = em.includes("true")
return n
}

module.exports = {
  isEven,
  sum,
  comboSum
}