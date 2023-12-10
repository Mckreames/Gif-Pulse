"use strict";

// Blob Movement
const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween.start();

// API Retrieval
const apiKey = "8Qux5k2hrVNKEy6YTRKvw1nXNfFIgRDl";
const apiUrl = "https://api.example.com/data";

// Using Fetch API
fetch(`${apiUrl}?apiKey=${apiKey}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
