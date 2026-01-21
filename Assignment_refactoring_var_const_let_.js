// Assignment: Refactoring var to const and let
// Victoria Salomon
// Objective: Replace var with const or let and explain choices

function checkAccess(loggedIn) {
  // accessLevel will change depending on conditions → let
  let accessLevel;

  // userRole might change later or be assigned → let
  let userRole;

  if (loggedIn) {
    // message exists only inside this block → let
    let message = "User is logged in.";
    console.log(message);

    if (userRole === "admin") {
      accessLevel = "full";
    } else {
      accessLevel = "limited";
    }
  } else {
    // separate message variable for else block → let
    let message = "User not logged in.";
    console.log(message);
    accessLevel = "none";
  }

  return accessLevel;
}

// Loop counter changes every iteration → let
for (let i = 0; i < 3; i++) {
  console.log("Attempt", i);

  // loggedIn changes each iteration → let
  let loggedIn = Math.random() >= 0.5;

  const access = checkAccess(loggedIn); // result is not reassigned → const
  console.log("Access Level:", access);
}
