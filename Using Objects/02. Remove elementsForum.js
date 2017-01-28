function solve(args) {
  Array.prototype.remove=function(x) {
      for (var index = 0; index < this.length; index++) {
          if (this[index] === x) {
              this.splice(index, 1);
          }
      }
      return this;
  };

    var inputArray = args.remove(args[0]);
    inputArray.forEach(function(item) {
      console.log(item+'');
    })
}