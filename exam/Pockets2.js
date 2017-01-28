function solve(args)
{
    const numbers = args[0].split(' ').map(Number);

    let pocketSum = 0;

    for(let i = 2; i < numbers.length -2; i += 1)
    {
        if(numbers[i - 1] > numbers[i - 2] && numbers[i - 1] > numbers[i]
            && numbers[i + 1] > numbers[i] && numbers[i + 1] > numbers[i + 2])
            {
                pocketSum += numbers[i];
            }
    }
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