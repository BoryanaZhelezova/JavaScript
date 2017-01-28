solve(['23']);

function solve(args) {
    for(var i = 2; i < args; i++) {
        if(args % i === 0) {
            return false;
        }
    }
    return args > 1;
}