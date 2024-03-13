// name array
var guestArray = ["ali", "suman", "hassan"];
// can not make dinner
var canNotAttend = "hassan";
// invite new guest
var newGuest = "shafaq";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("shane");
var middleGuest = "ali";
var midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleGuest);
guestArray.push("salman");
console.log(guestArray);
