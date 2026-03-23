const btn = document.querySelector('.btn_result');
const num = document.querySelector('#num');
const result = document.querySelector('.result');
const trying = document.querySelector('.trying');

const n = Math.floor(Math.random() * 100);
let trycount = 0;

btn.addEventListener('click', ()=>{
    if (num.value >0){
        if (num.value == n){
            trying.innerHTML = ` `;
            result.innerHTML = `Поздравляем вы выиграли за ${trycount} Попыток`;
            btn.disabled = true;
            num.disabled = true;
            setTimeout(()=>{
                window.location.reload();
            },2000)
        }else {
            let i = Math.abs(n - num.value);
            console.log(n,i);
            switch(true){
                case i>60 && i <=100 :result.innerHTML = `Мороз`; result.style.color = `blue`; break;
                case i>40 && i <=60 : result.innerHTML = `Холодно`; result.style.color = `aqua`; break;
                case i>20 && i <=40 : result.innerHTML = `Тепло`; result.style.color = `orange`; break;
                case i>10 && i <=20 : result.innerHTML = `Горячо`; result.style.color = `indianred`; break;
                case i>0 && i <=10 : result.innerHTML = `Очень горячо`; result.style.color = `red`; break;
            }
            trycount++;
        }
        trying.innerHTML = `Попыток ${trycount}`;
    }
    else
        alert("Введите число");
})