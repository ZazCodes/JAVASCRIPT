let heart = document.querySelector(".heart");
let img = document.querySelector(".image");

img.addEventListener("dblclick", function(){
    heart.classList.add("show");
    setTimeout(function(){
        heart.classList.remove("show");   
    }, 1000);
});