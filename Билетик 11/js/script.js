const btn = document.querySelectorAll('.btn');
const result = document.querySelector('.game_container');
const btncontainer = document.querySelector('.btn_container');
const choice = ['✊','✌','🖐️'];

let countP = 0;
let countC = 0;

btn.forEach(item =>{
    item.addEventListener('click', ()=>{
    let randomchoice = choice[Math.floor(Math.random()*choice.length)];
    const combinate = item.textContent+randomchoice;
    switch(combinate){
        case '✊✌':
        case '🖐️✊':
        case '✌🖐️':
            countP++;
            result.innerHTML =`
            <p>Победа</p>
            <p>Вы выбрали <span>${item.textContent}</span>, Компьютер выбрал <span>${randomchoice}</span></p>
            <p>Счёт: Игрок ${countP} vs Компьютер ${countC}`;
            
            break;
        case '✊🖐️':
        case '✌✊':
        case '🖐️✌':
            countC++;
            result.innerHTML =`
            <p>Поражение</p>
            <p>Вы выбрали <span>${item.textContent}</span>, Компьютер выбрал <span>${randomchoice}</span></p>
            <p>Счёт: Игрок ${countP} vs Компьютер ${countC}`;
            break;
        default:
            result.innerHTML =`
            <p>Ничья</p>
            <p>Вы выбрали <span>${item.textContent}</span>, Компьютер выбрал <span>${randomchoice}</span></p>
            <p>Счёт: Игрок ${countP} vs Компьютер ${countC}`;
            break;
        }
        console.log(countC,countP);
        if (countP >= 3){
            btn.forEach(item =>{
                item.disabled = true;
            })

            setTimeout(()=>{
            result.innerHTML =`
                            <p>Вы выиграли!!! Победил игрок</p>`;
                        btncontainer.innerHTML =``;
        },2000)
            setTimeout(()=>{
            window.location.reload();
        },5000)
        }
        if (countC >= 3){
            btn.forEach(item =>{
                item.disabled = true;
            })

            setTimeout(()=>{
            result.innerHTML =`
                <p>Вы проиграли!!! Победил компьютер</p>`;
            btncontainer.innerHTML =``;    
        },2000)
            setTimeout(()=>{
            window.location.reload();
        },5000)
        } 
    })
    
    
})