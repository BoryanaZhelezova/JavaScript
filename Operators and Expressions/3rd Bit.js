
//int p = 5;
//int n = 35;               // 00000000 00100011
//int mask = 1 << p;        // 00000000 00100000
//int nAndMask = n & mask;  // 00000000 00100000
//int bit = nAndMask >> p;  // 00000000 00000001
//Console.WriteLine(bit); 

solve(['1024']);

function solve(args){
    var num = 1 << 3;
    console.log((args & num) >> 3);
}