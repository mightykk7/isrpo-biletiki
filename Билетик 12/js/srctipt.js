const btndanger = document.querySelector('.danger');
const btnwarn = document.querySelector('.warning');
const btnsuccess = document.querySelector('.success');
const btninfo = document.querySelector('.info');
const alertbox = document.querySelector('.alert_box')
const alertbtn = document.querySelector('.alert_btn')
const btn = document.querySelectorAll('.btn');

const alerttitle = document.querySelector('.alert_h');
const alertdesc = document.querySelector('.alert_desc');
alertbtn.addEventListener('click', ()=>{
    alertbox.style.transform = 'translateY(-105%)';
    document.querySelector('main').style.filter = `brightness(1)`;
    document.querySelector('main').style.pointerEvents = `auto`;
})

const customAlert =()=>{
    alertbox.style.transform = 'translateY(0%)';
    document.querySelector('main').style.filter = `brightness(0.3)`;
    document.querySelector('main').style.pointerEvents = `none`;
}
btn.forEach(item=>{
    if (item.textContent == "Ошибка"){
        item.addEventListener('click', ()=>{
            customAlert();
            alertbox.style.background = `red`;
            alerttitle.textContent = "Опасность";
            alertdesc.textContent = "Слишком опасно";
        })
    }
    if (item.textContent == "Предупреждение"){
        item.addEventListener('click', ()=>{
            customAlert();
            alertbox.style.background = `rgb(180, 193, 0)`;
            alerttitle.textContent = "Предупреждение";
            alertdesc.textContent = "Будьте аккуратны";
        })
    }
    if (item.textContent == "Успех"){
        item.addEventListener('click', ()=>{
            customAlert();
            alertbox.style.background = `lime`;
            alerttitle.textContent = "Успешно";
            alertdesc.textContent = "Вы сделали успех";
        })
    }
    if (item.textContent == "Информация"){
        item.addEventListener('click', ()=>{
            customAlert();
            alertbox.style.background = `aqua`;
            alerttitle.textContent = "Информация";
            alertdesc.textContent = "Тут какая-то информация";
        })
    }
})