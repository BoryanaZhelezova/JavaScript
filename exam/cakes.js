function solve(params) {
    var givenMoney = parseInt(params[0]);
    var c1 = parseInt(params[1]);
    var c2 = parseInt(params[2]);
    var c3 = parseInt(params[3]);
 
    var limitC1 = parseInt(givenMoney / c1);
    var limitC2 = parseInt(givenMoney / c2);
    var limitC3 = parseInt(givenMoney / c3);
 
    var amountMax = 0;
    var amountTmp = 0;
 
    for (var i = limitC1; i >= 0; i--) {
        amountTmp = i * c1;
        if (amountTmp > amountMax && amountTmp <= givenMoney) {
            amountMax = amountTmp;
        }
        for (var j = limitC2; j >= 0; j--) {
            amountTmp = i * c1 + j * c2;
            if (amountTmp > amountMax && amountTmp <= givenMoney) {
                amountMax = amountTmp;
            }
            for (var k = limitC3; k >= 0; k--) {
                amountTmp = i * c1 + j * c2 + k * c3;
                if (amountTmp > amountMax && amountTmp <= givenMoney) {
                    amountMax = amountTmp;
                }
            }
        }
    }
 
    return amountMax;
}