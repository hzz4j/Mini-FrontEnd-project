"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// define some useful variables
let apiQuotesAvailable;
let apiQuotes;
// DOM elements
const newQuoteBtn = document.getElementById("new-quote");
const backToBlogBtn = document.getElementById("backToBlog");
const authorEl = document.getElementById("author");
const quoteEl = document.getElementById("quote");
const loaderEl = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");
// download from api
function downloadQuotesFromApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const api = "https://type.fit/api/quotes";
        try {
            const response = yield fetch(api);
            apiQuotes = (yield response.json());
            apiQuotesAvailable = true;
        }
        catch (error) {
            console.log("Error in downloadQuotesFromApi: ", error);
            console.log("Using local quotes only.");
            apiQuotesAvailable = false;
        }
    });
}
// 模拟异步请求
function getQuote() {
    const timeout = Math.random() * 2000;
    return new Promise((resolve) => {
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
function writeNewQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        showLoadingSpinner();
        const quote = yield getQuote();
        authorEl.innerText = quote.author;
        quoteEl.innerText = quote.text;
        hiddenLoadingSpinner();
    });
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
