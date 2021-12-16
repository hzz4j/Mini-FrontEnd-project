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
const backToBlogBtn = document.getElementById(
  "backToBlog"
)! as HTMLButtonElement;
const authorEl = document.getElementById("author")! as HTMLElement;
const quoteEl = document.getElementById("quote")! as HTMLElement;
const loaderEl = document.getElementById("loader")! as HTMLElement;
const quoteContainer = document.getElementById(
  "quote-container"
)! as HTMLElement;

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
  const timeout = Math.random() * 2000;
  return new Promise<Quote>((resolve) => {
    setTimeout(() => {
      // todo api请求失败，使用本地的数据
      let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      resolve(quote);
    }, timeout);
  });
}

function showLoadingSpinner() {
  loaderEl.hidden = false;
  quoteContainer.hidden = true;
}

function hiddenLoadingSpinner() {
  if (!loaderEl.hidden) {
    loaderEl.hidden = true;
    quoteContainer.hidden = false;
  }
}

async function writeNewQuote() {
  showLoadingSpinner();
  const quote = await getQuote();
  authorEl.innerText = quote.author;
  quoteEl.innerText = quote.text;
  hiddenLoadingSpinner();
}

function goToBlog() {
  window.open("https://q10viking.github.io", "_blank");
}

// Button listen click Event
newQuoteBtn.addEventListener("click", writeNewQuote);
backToBlogBtn.addEventListener("click", goToBlog);

// On load download API quotes in background
hiddenLoadingSpinner();
downloadQuotesFromApi();
