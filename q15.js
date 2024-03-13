var gustArray = ["ali", "hassan", "shane"];
gustArray.map(function (items) { return console.log("Hellow,".concat(items, " you are invited to dinner")); });
var canNotreach = "shane";
console.log("".concat(canNotreach, " can not make it on the dinner "));
var newgust = "salman";
gustArray[gustArray.indexOf(canNotreach)] = newgust;
console.log(gustArray);
