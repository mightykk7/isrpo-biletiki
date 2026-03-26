const btn = document.querySelector('.btn')
const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
const result = document.querySelector('#result');
const hobby = document.querySelector('#hobby');
const age = document.querySelector('#age')

btn.addEventListener('click', ()=>{
    if ((lastname.value<=1) && (firstname.value <=1)){
        alert("Введите имя и фамилию");
        return;
    }
    if (hobby.value == "n" ){
        alert("Ввыберите хобби");
        return;
    }
    let chars = [];
    chars.push(lastname.value.slice(0,3));
    chars.push(firstname.value.charAt(Math.floor(Math.random()* firstname.value.length)));
    chars.push(hobby.value);
    chars.push(age.value);

    chars = shuffle(chars);
    result.value = chars.join('');
})

const shuffle =(array)=>{
    for (let i = array.length; i>0;i--){
        let j =  Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const btnPass = document.querySelector('.btnPass');
const resultPass = document.querySelector('.resultPass');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const digital = document.querySelector('#digital');
const special = document.querySelector('#special');
const length = document.querySelector('#range');

length.addEventListener('input', ()=>{
    document.querySelector('.length').textContent = length.value;
})
btnPass.addEventListener('click', ()=>{
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
        resultPass.textContent = 'Нет условий';
    else {
        for (let i=0; i<range.value; i++){
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        resultPass.textContent = password;
    }
})