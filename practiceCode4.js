function numJewelsInStones(arr,brr) {
    var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    var str1 = arr[i];
    for(var j = 0; j < brr.length; j++) {
      var str2 = brr[j];
      if(str2 === str1) {
        sum++;
      }
    }
  }
  return sum
  }
  console.log(numJewelsInStones('aA','aAAbb'))//=>3
  console.log(numJewelsInStones('z','ZZ')) //=0
  console.log(numJewelsInStones('bZw','BbzZZwW'))//=4
  