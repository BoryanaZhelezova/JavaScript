function solve(args) {
    let length = +args[0],
        numbers = args[1].split(' ').map(Number),
        numberToCount = +args[2];

    console.log(countAppearances());

    function countAppearances() {
        let counter = 0;
        for (i = 0; i < length; i++) {
            if (numbers[i] === numberToCount) {
                counter++;
            }
        }

        return counter;
    }
}

solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);