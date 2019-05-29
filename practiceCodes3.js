// function sortedSqu (arr) {
//  var order = [];
//  for(var i = 0; i < arr.length; i++) {
//   squ = Math.pow(arr[i],2);
//     order.push(squ);
//     order.sort((a,b) => a - b);
  
//  }
// return order
// }

console.log(sortedSqu([-4, -1 , 0, 3, 10]))
//[0, 1, 9, 16, 100]
console.log(sortedSqu([-7, -3 , 2, 3, 11]))
//[4,9,9,49,121]
//Math.pow(base, exponent)
//a.reverse()
//numbers.sort((a, b) => a - b)


function sortedSqu (arr) {
  return arr.map(x => Math.pow(x,2)).sort((a,b) => a - b)
}

console.log(sortedSqu([-4, -1 , 0, 3, 10]))
//[0, 1, 9, 16, 100]
console.log(sortedSqu([-7, -3 , 2, 3, 11]))
//[4,9,9,49,121]