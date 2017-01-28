function solve(args){
    var str = args[0];

    console.log(reverse(str));

    function reverse(someString){
        return someString.split('').reverse().join('');
    }
}

solve(['sample']);
solve(['qwertytrewq']);