const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William B. Sprague" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving them.", author: "Zig Ziglar" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "You can, you should, and if you’re brave enough to start, you will.", author: "Stephen King" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "Great things are not done by impulse, but by a series of small things brought together.", author: "Vincent Van Gogh" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" }
];

  
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.getElementById("new-quote").addEventListener("click", () => {
  const randomQuote = getRandomQuote();
  document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
  document.getElementById("author").textContent = `- ${randomQuote.author}`;
});
