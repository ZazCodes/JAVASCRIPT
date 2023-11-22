let btn = document.querySelector('#button');
let quote = document.querySelector('.quotes');

const quotes = [
    {quote: "hey"},
    {quote: "hey me"},
    {quote: "hey there"},
    {quote: "i am here here we go"}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '<p>' + quotes[random].quote + '</p>';
});
