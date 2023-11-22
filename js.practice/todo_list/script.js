let todoList = document.querySelector(".todo");
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let user = document.querySelector(".user");

button.addEventListener("click", function(){
    if ( input.value == ""){
        alert("must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        user.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

        user.insertBefore(li, user.firstChild);
    }
    input.value = "";
});

user.addEventListener("click", function(e){
    if ( e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
});