export function capitalizeFirstLetter(word: string) {
  const wordArray: string[] = word.split("");
  wordArray.splice(0, 1, wordArray[0].toUpperCase());
  return wordArray.join("");
}
