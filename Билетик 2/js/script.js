const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');

const items = (document.querySelectorAll('img')).length -1;
let i = 0;
leftBtn.addEventListener('click',()=>{
    if (i!= 0){
        i--;
        document.querySelector('.slider').style.transform = `translateX(${-100 * i}%)`;
    } else{
        document.querySelector('.slider').style.transform = `translateX(-201%)`;
        i = items;
    }
})
rightBtn.addEventListener('click',()=>{
    if (i!= items){
        i++;
        document.querySelector('.slider').style.transform = `translateX(${-100 * i}%)`;
    } else{
        document.querySelector('.slider').style.transform = `translateX(0%)`;
        i = 0;
    }
})