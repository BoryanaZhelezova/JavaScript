solve(['3', '4']);

function solve(args) {
    var x = args[0],
        y = args[1];
    if(y>x){
        console.log(x + ' ' + y);
    }
    else{
        console.log(y + ' ' + x);
    }
}