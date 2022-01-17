let programmingLanguage = 'JavaScript';
let myInfoText = 'Всем привет! Меня зовут, Таир. Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript у Владилена. Я хочу стать веб-разработчиком, потому что хочу поменять профессию. До этого я изучал JavaScript 2 месяцев. Я уверен, что пройду данный курс до конца!';
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
console.log(myInfoText)
console.log(myInfoText.length)
console.log(myInfoText[0], myInfoText[myInfoText.length - 1])