solve(['-3', '-0.5', '-1.1', '-2', '-0.1']);

function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4],
        max = a;

        if ((b > a) && (b > c) && (b > d) && (b > e))
        {
            max = b;
        }
        else if ((c > a) && (c > b) && (c > d) && (c > e))
        {
            max = c;
        }
        else if ((d > a) && (d > b) && (d > c) && (d > e))
        {
            max = d;
        }
        else if ((e > a) && (e > b) && (e > c) && (e > d))
        {
            max = e;
        }

        console.log(max);
}

//
//function solve(args) {
  //  for (var i = 0; i < args.length; i++) {
   //     args[i] = parseFloat(args[i]);
  //  }  console.log(Math.max.apply(Math, args));
//}