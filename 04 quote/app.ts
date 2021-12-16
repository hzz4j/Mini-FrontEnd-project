// define type
type Quote = {
  author: string;
  text: string;
};
// define some useful variables
let apiQuotesAvailable: boolean;
let apiQuotes: Quote[];

// DOM elements
const newQuoteBtn = document.getElementById("new-quote")! as HTMLButtonElement;
const authorEl = document.getElementById("author")! as HTMLElement;
const quoteEl = document.getElementById("quote")! as HTMLElement;

// download from api
async function downloadQuotesFromApi() {
  const api = "https://type.fit/api/quotes";
  try {
    const response = await fetch(api);
    apiQuotes = (await response.json()) as Quote[];
    apiQuotesAvailable = true;
  } catch (error) {
    console.log("Error in downloadQuotesFromApi: ", error);
    console.log("Using local quotes only.");
    apiQuotesAvailable = false;
  }
}

// 模拟异步请求
function getQuote() {
  const timeout = Math.random() * 5;
  return new Promise<Quote>((resolve) => {
    setTimeout(() => {
      let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      resolve(quote);
    }, timeout);
  });
}

async function writeNewQuote() {
  const quote = await getQuote();
  authorEl.innerText = quote.author;
  quoteEl.innerText = quote.text;
}

// Button listen click Event
newQuoteBtn.addEventListener("click", writeNewQuote);

// On load download API quotes in background
downloadQuotesFromApi();
