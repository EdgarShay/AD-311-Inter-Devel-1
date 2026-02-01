
function checkAccess(loggedIn) {
    // accessLevel changes depending on conditions → use let
    let accessLevel;
    
    // userRole is never assigned here, but would change based on user data → use let
    let userRole;
    if (loggedIn) {
        // message is block-scoped and redefined in the else block → use let
        let message = "User is logged in.";
        console.log(message);
        // accessLevel is reassigned depending on role → let is appropriate
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        // separate message variable inside this block → use let
        let message = "User not logged in.";
        console.log(message);
        
        // accessLevel is reassigned here → let required
        accessLevel = "none";
    }
    return accessLevel;
}

// i changes every loop iteration → use let
for (let i = 0; i < 3; i++) {
    console.log("Attempt", i);
    
    // loggedIn changes every iteration → use let
    let loggedIn = Math.random() >= 0.5;
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}