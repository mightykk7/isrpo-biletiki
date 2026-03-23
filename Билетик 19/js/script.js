const now = new Date();

const FormatTime = (value) => {
    return `${(now.getUTCHours() + value).toString().padStart(2,"0")}:${now.getUTCMinutes().toString().padStart(2,"0")}:${now.getSeconds().toString().padStart(2,"0")}`;
}

document.querySelector('.item_moscow').textContent = `${FormatTime(3)}`;
document.querySelector('.item_london').textContent = `${FormatTime(0)}`;
document.querySelector('.item_newyork').textContent = `${FormatTime(-4)}`;

setInterval(()=>{
    const now = new Date();
    const FormatTime = (value) => {
    return `${(now.getUTCHours() + value).toString().padStart(2,"0")}:${now.getUTCMinutes().toString().padStart(2,"0")}:${now.getSeconds().toString().padStart(2,"0")}`;
}
    document.querySelector('.item_moscow').textContent = `${FormatTime(3)}`;
    document.querySelector('.item_london').textContent = `${FormatTime(0)}`;
    document.querySelector('.item_newyork').textContent = `${FormatTime(-4)}`;
},1000)