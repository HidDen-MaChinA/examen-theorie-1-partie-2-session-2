const { slice } = require('./1-slice');//1
const { merge }= require('./2-merge');//1
const { generateUnorderedArray } = require('./4-generate-unordered-array');//1

function sort(array) {//2
  if (array.length <= 1) {//3
    return array;//1
  }
  const middle = Math.floor(array.length / 2);//6
  const left = slice(array, 0, middle);//n
  const right = slice(array, middle, array.length);//n
  return merge(sort(left), sort(right));//log(n)
}

const array = generateUnorderedArray(10);//1
console.log(array);//1
console.log(sort(array));//n
//la complexiter temporelle de l'algorithme est 
//1+1+1+(2+3+6+n+n)*log(n)+1+1+n
//o=1+(n)*log(n)+1+n
//o=n*log(n)+n
//o=n*log(n)
