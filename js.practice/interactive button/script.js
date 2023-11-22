let btn = document.getElementById("btn");
let text = document.querySelector(".text");

btn.addEventListener("click", function(){
    text.innerHTML = "button is clicked";
    btn.value = "clicked";
})