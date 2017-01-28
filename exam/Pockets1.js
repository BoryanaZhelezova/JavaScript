function solve(args){
    const numbers = args[0].split(' ').map(Number);

    let peakIndeces = [];

    for(let i = 1; i < numbers.length - 1; i += 1)
    {
        //check for peak
        if(numbers[i] > numbers[i-1] && numbers[i] > numbers[i + 1])
        {
            peakIndeces.push(i);
        }
    }
    let pocketSum = 0;
    for(let i = 1; i < peakIndeces.length; i+= 1)
    {
        if(peakIndeces[i] - peakIndeces[i -1] ===2)
         {
             pocketSum += numbers[peakIndeces[i] - 1];
         }
    }
    console.log(pocketSum);

}

solve([
    "53 20 1 30 2 40 3 10 1"
]);

solve([
    "53 20 1 30 30 2 40 3 10 1"
]);

solve([
    "53 20 1 30 2 40 3 3 10 1"
]);
