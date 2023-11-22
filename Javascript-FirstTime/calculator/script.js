// Corrected JavaScript code
let string = "";
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = eval(string); // Warning: Using eval is not recommended due to security risks
            document.querySelector('input').value = string;
        } else if (buttonText === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});
