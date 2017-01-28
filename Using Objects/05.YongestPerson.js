var args = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 }
];

solve(args);

function solve(args) {
    var persons = [];

    for (var i = 0; i < args.length; i += 3) {
        persons.push({
            firstname: args[i],
            lastname: args[i + 1],
            age: +args[i + 2]
        });
    }

    function findYoungest() {
        var youngest = persons[0];
        for (var i in persons) {
            if (youngest.age > persons[i].age) {
                youngest = persons[i];
            }
        }
        return youngest.firstname + " " + youngest.lastname;
    }
    console.log(findYoungest());
}



