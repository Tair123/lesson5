const userString = prompt("Введите текст для обрезки.");
const startSliceIndex = prompt("Введите индекс, с которого нужно начать обрезку строки.");
const endSliceIndex = prompt("Введите индекс, которым нужно закончить обрезку строки.");
let userStringText = userString.trim();
let startSliceIndexNumber = Number(startSliceIndex); 
let endSliceIndexNumber = Number(endSliceIndex);
let string = userStringText.slice(startSliceIndexNumber, endSliceIndexNumber)
alert(`Результат: ${string}`);