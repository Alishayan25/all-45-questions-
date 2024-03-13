const admins1: string[] = [];

const admin1: string = "ALI";

if (admins1.length === 0) {
    console.log("We need to find some users!");}
 else 
 
 {for(const members of admins1) {
        if (members === "ALI") {console.log(`Hello ${admin1}, would you like to see a status report?`);} else {
            console.log(`Hello ${members}, thank you for logging again`);
        }
    };
}