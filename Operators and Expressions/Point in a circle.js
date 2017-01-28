solve(['-2', '0']);

function solve(args){
    var x = args[0],
        y = args[1],
        p = Math.sqrt(x * x + y * y);

        console.log((p <= 2 ? 'yes ' : 'no ') + p.toFixed(2));
}