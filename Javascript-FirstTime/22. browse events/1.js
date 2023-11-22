let x  = () =>{  // both type functions can be used
    alert("hello world 1");
}

let y = function(){  // both type functions can be used
    alert("hello world 2");
}

let button = document.getElementById("btn");
button.addEventListener('click', x);

let button_2 = document.getElementById("btn");
button.addEventListener('click', y);