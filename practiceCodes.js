function solve(alpha){
    var obj = {a:1,
               b:2,
               c:3,
               d:4,
               e:5,
               f:6,
               g:7,
               h:8,
               i:9,
               j:10,
               k:11,
               l:12,
               m:13,
               n:14,
               o:15,
               p:16,
               q:17,
               r:18,
               s:19,
               t:20,
               u:21,
               v:22,
               w:23,
               x:24,
               y:25,
               z:26
               }
  var add = 0;
  for(var i = 0; i < alpha.length; i++) {
    var letter = alpha[i]
    add += obj[letter];
  }
  return add;
  }
  
  console.log(solve('zodiac'))
  console.log(solve('strength'))
  console.log(solve('chruschtschov'))
  console.log(solve('abcde'))
  var array1 = [1, 4, 9, 16];
  
  // pass a function to map
  const map1 = array1.map(x => x * 2);
  
  console.log(map1);
  const array1 = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  // expected output: 10
  
  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  expected output: 15
  // var obj = [{a:1,
  //              b:2,
  //              c:3,
  //              d:4,
  //              e:5,
  //              f:6,
  //              g:7,
  //              h:8,
  //              i:9,
  //              j:10,
  //              k:11,
  //              l:12,
  //              m:13,
  //              n:14,
  //              o:15,
  //              p:16,
  //              q:17,
  //              r:18,
  //              s:19,
  //              t:20,
  //              u:21,
  //              v:22,
  //              w:23,
  //              x:24,
  //              y:25,
  //              z:26
  //              }]
  // function solve(alpha){  
  //   for(var i = 0; i < alpha.length; i++) {
  //   var element = alpha[i]
  //   }
  //   var num = obj.map(function(add) {
  //    return obj.a
  //   })
  //   return num
  // }
  
  // console.log(solve('zodiac'))
  // console.log(solve('strength'))
  // console.log(solve('chruschtschov'))
  // console.log(solve('abcde'))