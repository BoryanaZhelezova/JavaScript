function solve(args){
    const arr = args[0].split(' ').map(Number);
    const rows = arr[0];
    const cols = arr[1];

    const playerCoords = args[1].split(/[; ]/g).map(Number);
    let troll1 = 
    {
        row: playerCoords[0],
        col: playerCoords[1],
        trapped: false
    };

    let troll2 = 
    {
        row: playerCoords[2],
        col: playerCoords[3],
        trapped: false
    };

        let princess = 
    {
        row: playerCoords[4],
        col: playerCoords[5],
        trapped: false

    };

    let traps = [];
    for(let i = 0; i < rows; i += 1)
    {
        let row = new Array(cols);
        row.fill(false);
        traps.push(row);
    }
    args.shift();
    args.shift();

    args.forEach(function(command){
        if(command === 'lay trap')
        {
            traps[princess.row][princess.col] = true;
        }
        else
        {
            let spl = command.split(' ');
            let unitToMove;
            if(spl[1][0] = 'L')
            {
                unitToMove = princess;
            }
            else if(spl[1][0] = 'W')
            {
                unitToMove = troll1;
            }
            else if(spl[1][0] = 'N')
            {
                unitToMove = troll2;
            }
            else
            {}

            if(unitToMove.trapped)
            {
                return;
            }

            if(spl[2] === 'u' && unitToMove.row > 0)
            {
                unitToMove.row -= 1;
            }
            else if(spl[2] === 'd' && unitToMove.row < rows-1)
            {
                unitToMove.row += 1;
            }
            else if(spl[2] === 'l' && unitToMove.col > 0)
            {
                unitToMove.col -= 1;
            }
            else if(spl[2] === 'r' && unitToMove.col < col-1)
            {
                unitToMove.col += 1;
            }

            if(troll1.row === troll2.row && troll2.col === troll2.col)
            {
                troll1.trapped = false;
                troll2.trapped = false;
                traps[troll1.row][troll2.col] = false;
            }

            if(spl[1][0] !== 'L' && traps[unitToMove.row][unitToMove.col])
            {
                unitToMove.trapped = true;
            }


            if(princess.row === rows - 1 && princess.col === cols - 1)
            {
                console.log(`Lsjtujzbo is saved! ${troll1.row} ${troll1.col} ${troll2.row} ${troll2.col}`);
            }
            else if(troll1.trapped && troll2.trapped)
            {
                console.log(`Lsjtujzbo is saved! ${troll1.row} ${troll1.col} ${troll2.row} ${troll2.col}`);
            }
            else
            {
                if(Math.abs(princess.row -troll1.row)< 2 && Math.abs(princess.col - troll1.col) < 2)
                {
                    console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`); 
                }
                else if(Math.abs(princess.row -troll2.row)< 2 && Math.abs(princess.col - troll2.col) < 2)
                {
                    console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`); 
                }
            }

        }

    });
}
['Wboup', 'Nbslbub', 'Lsjtujzbo' ]
.map(function(name)
{
    let decodeName = '';
    for(let i = 0; i < name.length; i += 1) 
    {
        const code =  name.charCodeAt(i) -1; 
        decodeName += String.fromCharCode(code);

    }
    return decodeName;
})
.forEach(name => console.log(name));
