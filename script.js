"use strict";

// Blob Movement
const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween.start();

// API Fetch
function fetchGiphyData() {
  const apiKey = "8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl";
  const searchQuery = document.getElementById("gifTopic").value;
  const numberOfResults = document.getElementById("numOfResults").value;
  // const gifWidth =
  // const gifHeight =

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${numberOfResults}&offset=0&rating=r&lang=en&bundle=messaging_non_clips`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! Status: ${response.status}");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayImages(data.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayImages(images) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.images.original.url;
    resultContainer.appendChild(imgElement);
  });
}

// API Retrieval
// const apiKey = "8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl";
// const apiUrl =
//   "'https://api.giphy.com/v1/gifs/search?api_key=8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl&q=spiderman&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips";

// Using Fetch API
// fetch(`${apiUrl}?apiKey=${apiKey}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// Zsolt's API Retrieval
// fetch(
//   "https://api.giphy.com/v1/gifs/search?api_key=8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl&q=boob&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips"
// )
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (response) {
//     console.log(response);
//     let gifs = response.data;
//     let listItems = [];
//     for (let gif of gifs) {
//       let title = gif.title;
//       let source = gif.images.original.url;
//       listItems.push(`<img src='${source}' alt='${title}' />`);
//     }
//     let html = "<div>" + listItems.join("") + "</div>";
//     document.body.innerHTML += html;
//   });
