solve(['5']);

function solve(args) {
      var n = +args[0],
      arr = [],
      i;
 
    for(i = 0; i < n; i ++){
    arr[i] = i * 5;

    console.log(arr[i]);
   }
  
}