const userText = prompt('Введите текст');
const wordFromText = prompt('Введите слово из текста');
let userWordText = userText.trim();
let userWordFromText = wordFromText.trim();
let indexOfWord = userText.indexOf(wordFromText);
const word = userText.slice(0, indexOfWord);
alert(`Результат: ${word}`)