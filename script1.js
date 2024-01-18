"use strict";

// Blob Movement
const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween.start();

// Caps input field to 50
const inputField = document.getElementById("numOfResults");

inputField.addEventListener("input", function () {
  if (parseInt(inputField.value) > 50) {
    inputField.value = "50"; // Set the value to 50 if it's greater
  }
});

// API Fetch
function fetchGiphyData(event) {
  event.preventDefault();

  const apiKey = "8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl";
  const searchQuery = document.getElementById("gifTopic").value;
  const numberOfResults = Number.parseInt(
    document.getElementById("numOfResults").value
  );
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
      displayImages(data.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Pulse Button
document.getElementById("search-gif").addEventListener("click", fetchGiphyData);

function displayImages(images) {
  const resultContainer = document.getElementById("resultContainer");
  const numberOfResults = Number.parseInt(
    document.getElementById("numOfResults").value
  );
  const searchQuery = document.getElementById("gifTopic").value;

  if (!searchQuery) {
    resultContainer.innerHTML = "Check Your Keyword And Try Again...";
  } else {
    resultContainer.innerHTML = "";

    // if (numberOfResults && searchQuery) {
    //   resultContainer.innerHTML = "";
    // } else if (!searchQuery) {
    //   resultContainer.innerHTML = "Check Your Keyword And Try Again...";
    // } else if (!numberOfResults) {
    //   resultContainer.innerHTML = "Check Your Number Of Results And Try Again...";
  }

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.images.original.url;
    resultContainer.appendChild(imgElement);
  });
}

// Random Gif Button
function formSubmitted(event) {
  event.preventDefault();
  const searchQuery = document.getElementById("gifTopic").value;
  const numberOfResults = Number.parseInt(
    document.getElementById("numOfResults").value
  );

  getData(searchQuery, numberOfResults);

  document.getElementById("gifTopic").value = "";
}

// Giphy API defaults
const giphy = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: "8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl",
  tag: "fail",
  type: "random",
  rating: "r",
};
// Target gif-wrap container
const gifWrap = document.getElementById("gif-wrap");
// Giphy API URL
let giphyURL = encodeURI(
  giphy.baseURL +
    giphy.type +
    "?api_key=" +
    giphy.apiKey +
    "&tag=" +
    giphy.tag +
    "&rating=" +
    giphy.rating
);

function getData(searchQuery, numberOfResults) {
  fetch(giphyURL)
    .then((response) => response.json())
    .then(renderData)
    .catch((error) => {
      console.error("Error:", error);
    });
}

function renderData(response) {
  let html = "";

  if (response.data && typeof response.data === "object") {
    const image = response.data;
    html = `<img src="${image.images.original.url} alt="${image.title}" />`;
  } else {
    console.error("Invalid response format");
  }
  document.getElementById("resultContainer").innerHTML = html;
}

document.getElementById("new-gif").addEventListener("click", formSubmitted);

// End Random Gif Button
