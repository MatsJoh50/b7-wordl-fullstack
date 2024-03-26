import express from "express";

const app = express()

let items = [];

function getRandomWord(wordArray) {
    // Generate a random index within the bounds of the array
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    
    // Return the word at the randomly chosen index
    return wordArray[randomIndex];
  }
  
  // Example usage:
  const wordArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const randomWord = getRandomWord(wordArray);

app.get('/api/randomword', (req, res) => {
    const wordArray = ["apple", "banana", "cherry", "date", "elderberry"];
    const randomWord = getRandomWord(wordArray);
    res.send(`${randomWord}`);
})


app.listen(5080);