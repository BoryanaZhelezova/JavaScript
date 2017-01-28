solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);

function solve(args){
    let len = +args.shift(),
        numbers = args.map(Number),
        frequentNum,
        maxCount = 0;

    for(let i = 0; i < len; i += 1)
    {
        let currNum = numbers[i],
            count = 1;

            for(let j = i + 1; j < len; j += 1)
            {
                if(currNum === numbers[j])
                {
                    count += 1;
                    if(count > maxCount)
                    {
                        maxCount = count;
                        frequentNum = currNum;
                    }
                }
            }
    }
    console.log(frequentNum + ' (' + maxCount + ' times)');
}