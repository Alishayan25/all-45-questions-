var admins1 = [];
var admin1 = "ALI";
if (admins1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, admins1_1 = admins1; _i < admins1_1.length; _i++) {
        var members = admins1_1[_i];
        if (members === "ALI") {
            console.log("Hello ".concat(admin1, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(members, ", thank you for logging again"));
        }
    }
    ;
}
