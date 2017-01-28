function solveRegex(args) {
  var match, betweenTags, link,
    text = args[0],
    matchesArr = [],
    allTogetherArr = [],
    regex = new RegExp('<a href="(.*?)">(.*?)</a>', "g");

  while ((matchesArr = regex.exec(text)) !== null) {
    match = matchesArr[0];    
    link = matchesArr[1];    
    betweenTags = matchesArr[2];
    allTogetherArr.push(match);
    allTogetherArr.push(link);
    allTogetherArr.push(betweenTags);
  }

  for (var i = 0, len = allTogetherArr.length; i < len; i += 3) {
      text = text.replace(allTogetherArr[i], '[' + allTogetherArr[i + 2] + ']' + '(' + allTogetherArr[i + 1] + ')');
  }
  console.log(text);
}