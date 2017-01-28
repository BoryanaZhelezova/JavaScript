solve(['2.5', '2']);

function solve(args){
    var x = args[0],
        y = args[1];
    let insideCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 2.25;
    let insideRectangle = (x >= -1) && (x <= 5) && (y >= -1) && (y <= 1);

    console.log(insideCircle ? "inside circle" : "outside circle"); 
    console.log(insideRectangle ? "inside rectangle" : "outside rectangle");
}