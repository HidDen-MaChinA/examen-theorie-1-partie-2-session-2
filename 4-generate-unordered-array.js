const { arrayContain } = require('./3-array-contain');//1

function generateUnorderedArray(size) {//2
  let array = [];//1
  for (let i = 0; i < size; i++) {//5
    let number = Math.floor(Math.random() * 100);//6
    while (arrayContain(array, number)) {//3
      number = Math.floor(Math.random() * 100);//6
    }
    array.push(number);//3
  }
  return array;//1
}

module.exports = { generateUnorderedArray };//1

//complexiter temporelle de l'algorithme 
//1+2+1+(5+6+(3+6)*(arrayContain(array, number) == true)+3)*size+1+1
//o=1+1+1(1+1+(1+1)*n+1)*n+1+1
//o=1+(1+n)*n
//o=1+n^2
//o=n^2
