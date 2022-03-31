function arrayContain(array, number) {//3
  for (let i = 0; i < array.length; i++) {//6
    if (array[i] === number) {//5
      return true;//1
    }
  }
  return false;//1
}

module.exports = { arrayContain };//1

//complexiter temporelle de l'algorithme 
//3+(6+5+1+1)*array.length+1
//o=1+(1+1+1+1)*n+1
//o=1+(1)n
//o=n+1
//o=1
