const answer = document.querySelector('#answer');
const quest = document.querySelector('#quest')
const btn = document.querySelector(".btn");

const text = ['Да','Не уверен','Абсолютно','Не могу сказать'];

btn.addEventListener('click',()=>{
    if (quest.value !="")
        answer.value = text[Math.floor(Math.random() * text.length)];
    else
        alert("Введи вопрос");
})