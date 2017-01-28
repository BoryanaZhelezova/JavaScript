// Copy Code Snippet Here
function solve(args){
    let arr = args.map(Number),
        count = 0,
        bestCount = 0;
    for(let i = 1; i < arr.length - 1; i += 1){
        if(arr[i] === arr[i + 1]){
            count += 1;
            console.log(count);
            if(count > bestCount){
                bestCount = count;
            }
        }
        else{
            count = 0;
        }
    }
    console.log(bestCount + 1);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);