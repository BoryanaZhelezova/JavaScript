function solve (args) {
       arrayLength = +args[0],
       array = args[1].split(' ').map(Number);

    var sorted = array.sort(function (a, b) {
        return a - b
    });


    console.log(sorted.join(' '));
}
solve(['10', '36 10 1 34 28 38 38 27 30 20']);