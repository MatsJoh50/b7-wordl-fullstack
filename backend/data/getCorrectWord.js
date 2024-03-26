import fs from "fs";


export default function getCorrectWord(bool, length) {
  // Read the JSON file
  const data = fs.readFileSync("new_counted_list.json", "utf-8");

  // Parse JSON data
  const sortedWords = JSON.parse(data);

  // Determine whether to choose from 'single' or 'multi'
  const single = bool; // Change to false to choose from 'multi'
  const lengthOfWord = length;

  // Choose a random word from the specified category and length
  let randomWord = "";

  if (single) {
    const singleWords = sortedWords.single[lengthOfWord];
    if (singleWords && singleWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * singleWords.length);
      randomWord = singleWords[randomIndex];
    }
  } else {
    const multiWords = sortedWords.multi[lengthOfWord];
    if (multiWords && multiWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * multiWords.length);
      randomWord = multiWords[randomIndex];
    }

    return randomWord;
  }
}
