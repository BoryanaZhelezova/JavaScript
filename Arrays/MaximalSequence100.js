function solve(args) {
    args.splice(0,1);
    var count = 1;
    var maxCount = 0;

    for (var index = 1; index < args.length; index++) {
        if (+args[index] === +args[index -1]) {
            count++;
            if (maxCount < count) {
            maxCount = count; 
            }
        }
        else{
            count = 1;
        }
    }
    console.log(maxCount);
}