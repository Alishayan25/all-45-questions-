// name array
let guestArray1:string[] = ["ali","suman","hassan"];

// can not make dinner
let canNotAttend:string = "hassan";
// invite new guest
let newGuest :string = "shafaq";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.unshift("shane");


let middleGuest:string = "ali";
let midleIndex = guestArray.length/2;
guestArray.splice(midleIndex,0,middleGuest);


guestArray.push("salman");
console.log(guestArray);