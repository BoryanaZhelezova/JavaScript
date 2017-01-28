solve(['food', 'food']);
 function solve(args) {

    var arr1 = String(args[0]),
        arr2 = String(args[1]);

    if (arr1 > arr2) {
        console.log('>');
    }
    else if (arr1 < arr2) {
        console.log('<');
    }
    else if (arr1 === arr2) {

        console.log('=');
    }
}