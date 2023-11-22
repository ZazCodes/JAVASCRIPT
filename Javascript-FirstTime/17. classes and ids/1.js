let back = document.getElementById("first");
back.style.color = "red";

let forward = document.getElementsByClassName("dead")[0];
forward.style.color = "blue";

let here = document.querySelector(".here");
console.log(here);
// here.style.color = "yellow";

let by = document.querySelectorAll(".he, .re, .me");
by[0].style.color = "brown"; 
by[1].style.color = "green";
by[2].style.color = "blue";