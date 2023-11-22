// a <p> with red text that says “Hey I’m red!”
let element = document.createElement('p')
element.innerText = 'i am red';
element.style.color = 'red';
let container = document.querySelector('.container')
container.appendChild(element)


// an <h3> with blue text that says “I’m a blue h3!”
let crt = document.createElement('h3')
crt.innerText = 'i am blue'
crt.style.cssText = 'color : blue;'
let cont = document.querySelector('.container')
cont.appendChild(crt);


// a <div> with a black border and pink background color with the following elements inside of it:

// 1. another <h1> that says “I’m in a div”
//  2. a <p> that says “ME TOO!”
//  3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
let createDiv = document.createElement('div')
createDiv.style.cssText = 'border: 1px solid black; background-color: pink;'
// 1.
let anotherh1 = document.createElement('h1')
anotherh1.textContent = 'I am in a div';
createDiv.appendChild(anotherh1);
// 2.
let anotherP = document.createElement('p')
anotherP.textContent = 'ME TOO!';
createDiv.appendChild(anotherP);


let containe = document.querySelector('.container')
containe.appendChild(createDiv);


// button Press Me
let button = document.querySelector('#btn')
button.addEventListener('click', function(){
    alert('its zaz bro')
})

// Properties
let button1 = document.querySelector('#button1')
button1.addEventListener('click', function(e){
    console.log(e.target.style.backgroundColor = 'red')
})