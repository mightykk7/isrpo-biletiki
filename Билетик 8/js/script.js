const btn = document.querySelector('.btn');

const fromValue = document.querySelector('#from_value');
const toValue = document.querySelector('#to_value');
const fromInput = document.querySelector('#from');

const result = document.querySelector('.result');

btn.addEventListener('click', ()=>{
    if (toValue.textContent == "Выберите параметр" || fromValue.value == "Выберите параметр")
    {
        alert("Выберите параметр");
        return;
    }
    if (fromInput.value <=0){
        alert("Ввод неверный");
        return;
    }
    result.textContent = `${funcResult(fromValue.value, toValue.value).toFixed(4)}`;
})
const funcResult = (from, to) =>{
    switch(from + "->" + to){
        case "m->in" : return fromInput.value / (2.54 / 100);
        case "m->ft" : return fromInput.value / 0.3048;
        case "m->yd" : return fromInput.value / 0.9144;
        case "m->m" : return fromInput.value * 1;
        case "m->mi" : return fromInput.value * 0.000621371;

        case "in->m" : return fromInput.value * (2.54 / 100);
        case "in->ft" : return (fromInput.value * (2.54 / 100)) * (fromInput.value / 0.3048);
        case "in->yd" : return (fromInput.value * (2.54 / 100)) * (fromInput.value * 0.9144);
        case "in->in" : return fromInput.value * 1;
        case "in->mi" : return (fromInput.value * (2.54 / 100)) * (fromInput.value * 0.000621371);

        case "ft->m" : return fromInput.value * 0.3048;
        case "ft->in" : return (fromInput.value / 0.3048) * (fromInput.value / (2.54 / 100));
        case "ft->yd" : return (fromInput.value / 0.3048) * (fromInput.value * 0.000621371);
        case "ft->ft" : return fromInput.value * 1;
        case "ft->mi" : return (fromInput.value / 0.3048) * (fromInput.value * 0.9144);

        case "yd->m" : return fromInput.value * 0.9144;
        case "yd->ft" : return (fromInput.value * 0.9144) * (fromInput.value / 0.3048);
        case "yd->in" : return (fromInput.value * 0.9144) * (fromInput.value / (2.54 / 100));
        case "yd->yd" : return fromInput.value * 1;
        case "yd->mi" : return (fromInput.value * 0.9144) * (fromInput.value * 0.000621371);

        case "mi->m" : return fromInput.value / 0.000621371;
        case "mi->ft" : return (fromInput.value / 0.000621371) * (fromInput.value / 0.3048);
        case "mi->in" : return (fromInput.value / 0.000621371) * (fromInput.value / (2.54 / 100));
        case "mi->mi" : return fromInput.value * 1;
        case "mi->yd" : return (fromInput.value / 0.000621371) * (fromInput.value / 0.9144);
    }
}