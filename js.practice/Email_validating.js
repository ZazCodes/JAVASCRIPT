function validateEmail(email) {
    // Regular expression for validating email addresses
    let checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return checkEmail.test(email);
}

let emailAddress = "test@example.com"; // Replace with the email you want to validate
let isValid = validateEmail(emailAddress);

console.log(`Is ${emailAddress} a valid email address? ${isValid}`);