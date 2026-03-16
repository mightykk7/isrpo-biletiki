const btn = document.querySelector('.btn');
const sum = document.querySelector('#sum');
const prc = document.querySelector('#prc');
const year = document.querySelector('#year');

const monthpay = document.querySelector('#monthpay');
const pay = document.querySelector('#pay');
const overpay = document.querySelector('#overpay');

prc.addEventListener('input', ()=>{
    document.querySelector('.prc').textContent = prc.value;
})
year.addEventListener('input', ()=>{
    document.querySelector('.year').textContent = year.value;
})
btn.addEventListener('click', ()=>{
    let prcMon = prc.value /100 /12;
    let mon = year.value*12;
    if (!parseInt(sum.value))
        alert("Ты что дурак?")
    else{
        monthpay.value = (sum.value * (prcMon *(1 + prcMon)**mon)/ ((1+prcMon)**mon - 1)).toFixed(2);
        pay.value =(monthpay.value * mon).toFixed(2);
        overpay.value = (pay.value - sum.value).toFixed(2);
    }
})