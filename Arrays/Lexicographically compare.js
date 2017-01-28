solve(['food', 'food']);


/* При C# тази задача си е бая занимавка, но тук в JavaScript решението я е много лесно тъй като, 
        ако просто сравним "abc" == "abc" ще получим true. 
        Ако сравним "abc" < "abc" или "abc" > "abc" получаваме false. Но ако сравним "abc" < "akl" ще получим true!!! 
        Т.е. стринга "abc" лексикографски е по-напред/по-малък е от "akl". 
        Или казано с други думи, JavaScript има способността автоматично да сравнява лексикографски чаровете. */
    
function solve(args){
    var a = args[0],
        b = args[1];

    if (a > b) {
        console.log('>');
    }
    else if (a < b) {
        console.log('<');
    }
    else if (a === b) {

        console.log('=');
    }
}