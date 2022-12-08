const btnTranslate = document.querySelector("#btnTranslate");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translat/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

const handleErr = () => {
  output.innerText = "Something went wrong with the server or Too Many Requests, Try after sometime";
}

const btnClick = () => {
  var inputText = input.value;
  fetch(getTranslationUrl(inputText))
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      output.innerText = jsonData.contents.translated;
    })
    .catch(handleErr);
}

btnTranslate.addEventListener("click", btnClick)







// Live exercise after ex06
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// fetch(url)
// .then(function res(response) {
//     return response.json();
// })
// .then(function jsonData(jsonData) {
//     console.log(jsonData)
// })

// 🔥
// EX 07 Challenge : Call the server above with different text & see the contents of text reflect back on what you sent.
// use this as a text
// 1. I'm Batman
// 2. I'm Superman
// 3.I'm Shaktiman

// const setUrl = (text) => {
//   var newUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text=" + text;
//   fetch(newUrl)
//     .then(function res(response) {
//       return response.json();
//     })
//     .then(function jsonData(jsonData) {
//       console.log(jsonData.contents.text)
//     })
// }
// setUrl("I'm Shaktiman");
// setUrl("I'm Superman");
// setUrl("I'm Spiderman");