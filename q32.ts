
const currentUsers: string[] = ['junaid', 'shifa', 'liboo', 'faran', 'romesha'];

const newUsers: string[] = ['ali', 'romesha', 'salman', 'fatima'];

// Function to check if a username is already taken
function isUserNameTaken(userName: string): boolean {
    return currentUsers.some(user => user.toLowerCase() === userName.toLowerCase());
}

// Loop through newUsers to check if each username is available
for (const newUser of newUsers) {
    if (isUserNameTaken(newUser)) {
        console.log
        
        (`The username '${newUser}' has already been taken. Please enter a new username.`);} else {
       
            console.log 
        (`The username '${newUser}' is available.`);
    }
}