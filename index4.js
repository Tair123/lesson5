const userAge = prompt('Сколько вам лет?');
const userName = prompt('Как вас зовут?');
console.log(Number(userAge));
console.log(userAge.trim());
console.log(userName.trim());
alert(`Вас зовут, ${userName} и вам ${userAge} лет`);