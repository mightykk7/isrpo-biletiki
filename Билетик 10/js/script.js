const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const digital = document.querySelector('#digital');
const special = document.querySelector('#special');
const length = document.querySelector('#range');

length.addEventListener('input', ()=>{
    document.querySelector('.length').textContent = length.value;
})
btn.addEventListener('click', ()=>{
    let chars = '';
    let password = '';
    if (upper.checked){
        chars += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if (lower.checked){
        chars += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (digital.checked){
        chars += '1234567890';
    }
    if (special.checked){
        chars += '~!@#$%^&*<>?';
    }
    if (chars == '')
        result.textContent = 'Нет условий';
    else {
        for (let i=0; i<range.value; i++){
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        result.textContent = password;
    }
})