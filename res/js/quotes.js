// quotes arraylist
const quotes = [
  {
    quote: "The way get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new",
    author: "Albert Einstein",
  },
  {
    quote:
      "Let me assert my firm belief that the only thing we have to fear is fear itself",
    author: "F.D. Roosevelt",
  },
  {
    quote: "Sometimes even to live is an act of courage",
    author: "Seneca",
  },
  {
    quote:
      "By nature, men are nearly alike. by practice, they get to be wide apart",
    author: "Confucius",
  },
  {
    quote: "life is not fair get used to it",
    author: "Bill Gates",
  },
  {
    quote:
      "Sometimes Life is going to hit you in the head with a brick. Don't lose faith",
    author: "Steve Jobs",
  },
  {
    quote:
      "Let's go invent tomorrow rather than worrying about what happened yesterday",
    author: "Steve Jobs",
  },
  {
    quote: "You can't change what u r, only what u do",
    author: "Philip Pullman",
  },
  {
    quote: "Change the way u look at things and the things u  look at change",
    author: "Wayne Dyer",
  },
  {
    quote:
      "The greatest misake u can make in life is to be continually fearing u will make one",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "Not everything that is faced can be changed, but nothing can be changed until it's faced",
    author: "James Baldwin",
  },
  {
    quote:
      "I can't say whether things will get better if we change. what I can say's they must change if they're to get better",
    author: "Georg C. Lichtenberg",
  },
];

// quotes (quote, author)
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Random values
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// show text(quote, author)
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
