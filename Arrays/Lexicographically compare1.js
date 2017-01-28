solve(['halo', 'hello']);

function solve(args){
    var first = args[0],
        second = args[1],
        isEqual = true,
        result,
        long;

        long = Math.min(first.length, second.length);

        for(var i = 0; i < long; i++)
        {
            if(first[i] !== second[i])
            {
                isEqual = false;
                result = (first[i] < second[i]) ? "<" : ">";
                break;
            }
            else
            {
                if(first.length !== second.length)
                {
                    isEqual = false;
                    result = (first.length < second.length) ? "<" : ">";
                }
            }
        }
        console.log(isEqual ? "=" : result);
}