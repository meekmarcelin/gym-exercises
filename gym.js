function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    
    // Reverse each word and store them in a new array
    let reversedWords = words.map(word => {
      return word.split("").reverse().join("");
    });
    
    // Join the reversed words with spaces to form the final string
    return reversedWords.join(" ");
  }
  