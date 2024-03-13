var currentUsers = ['junaid', 'shifa', 'liboo', 'faran', 'romesha'];
var newUsers = ['ali', 'romesha', 'salman', 'fatima'];
// Function to check if a username is already taken
function isUserNameTaken(userName) {
    return currentUsers.some(function (user) { return user.toLowerCase() === userName.toLowerCase(); });
}
// Loop through newUsers to check if each username is available
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (isUserNameTaken(newUser)) {
        console.log("The username '".concat(newUser, "' has already been taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
