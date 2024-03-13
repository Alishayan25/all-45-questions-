// name array
var guestArray = ["ali", "shayan", "shane"];
// can not make dinner
var canNotAttend = "shane";
// invite new guest
var newGuest = "qasim";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("shifa");
var middleGuest = "liboo";
var midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleGuest);
guestArray.push("mishal");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nSorry ".concat(removeguest, " we can't invite you to dinner!"));
}
;
guestArray.map(function (item) { return console.log("\n".concat(item, " You are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
