const quotes = [{ text: "The best revenge is massive success.", author: "Frank Sinatra" },{ text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },{ text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },{ text: "Happiness depends upon ourselves.", author: "Aristotle" },{ text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }];
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("newQuoteBtn");
let lastIndex = -1; 
btn.addEventListener("click", function() {
  let randomIndex;
  do {
randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex); 

  lastIndex = randomIndex;

  quoteEl.textContent = `"${quotes[randomIndex].text}"`;
  authorEl.textContent = `--${quotes[randomIndex].author}`;
});
