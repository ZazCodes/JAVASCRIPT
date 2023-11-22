let a = document.getElementById("first");
let dead = a.getAttribute("class");
console.log(a);

console.log(a.hasAttribute("class"));
console.log(a.hasAttribute("style"));

console.log(a.setAttribute("class", "true me-here")); // inspect in inspector (browser)
console.log(a.dataset);