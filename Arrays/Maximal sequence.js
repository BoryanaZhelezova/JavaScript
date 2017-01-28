function solve(args) {
    let arr = args.map(Number);
   let arrMAX = [arr[0]];
    let arrNEXT = [arr[0]];
    let count = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            arrNEXT.splice(0, 0, arr[i + 1]);
            count += 1;
            if (arrMAX.length < count) {
                arrMAX = arrNEXT;
            }
        } else {
            arrNEXT = [arr[i + 1]];
            count = 1;
        }
    }
    console.log(arrMAX.length);
}
solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);