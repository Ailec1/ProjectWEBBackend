const users = []; // array to store user data

function signUp(email, username, password) {
  // check if email or username already exists
    const existingUser = users.find((user) => user.email === email || user.username === username);
    if (existingUser) {
        return "Email or username already exists!";
    }

  // create new user object and push to array
    const newUser = {
        email: email,
        username: username,
        password: password,
    };
    users.push(newUser);

    return "Sign up successful!";
}

// example usage
console.log(signUp("test@example.com", "USER1", "password123")); // "Sign up successful!"
console.log(signUp("test2@example.com", "USER1", "password456")); // "Email or username already exists!"
