
// name array
let guestArray:string[] = ["ali","shayan","shane"];

// can not make dinner
let canNotAttend:string = "shane";
// invite new guest
let newGuest :string = "qasim";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.unshift("shifa");


let middleGuest:string = "liboo";
let midleIndex = guestArray.length/2;
guestArray.splice(midleIndex,0,middleGuest);


guestArray.push("mishal");
console.log(guestArray);

console.log("we can invite only two people for dinner!");

while(guestArray.length>2){
 let removeguest = guestArray.pop();
 console.log(`\nSorry ${removeguest} we can't invite you to dinner!`);
};

guestArray.map((item)=> console.log(`\n${item} You are still invited to dinner!`));

guestArray.pop();
guestArray.pop();
console.log(guestArray);