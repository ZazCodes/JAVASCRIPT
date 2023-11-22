function validatePassword(value){
    // let checkPassword = /^[a-zA-Z0-9]$/;
    let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return checkPassword.test(value);
}

let password = "Zaz-12345";
let changePassword = validatePassword(password);

console.log(`password is ${password}, is it valid : ${changePassword}`);