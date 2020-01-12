const split = (str, delim) => {
  // write code for strings.split
  let string = str.split(delim)
  return string
}

const pairs = (str) => {
  // write code for strings.pairs
  let string =  [];
    let type = str.split("");
  //  console.log(type)
  let len = str.length
  let i = str.length/2
//  console.log(i)
  while(i > 0){
    let type2 = type.splice(0, 2);
  //  console.log(type2)
    let newtype = type2.join("")
   // console.log(newtype)
    string.push(newtype)
    type.slice(0, 2)
  //  console.log(type)
  i--
  }
  return string
}

const reverse = (str) => {
  // write code for strings.reverse
 let string = str.split("")
 return string.reverse().join("")
 
}

module.exports = {
  split,
  pairs,
  reverse
}