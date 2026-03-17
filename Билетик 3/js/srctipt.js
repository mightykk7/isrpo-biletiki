const theme = document.querySelector('.theme_btn');
let state = true;
theme.addEventListener('click', ()=>{
    if (state){
        document.querySelector('link').href = 'css/dark.css';
        theme.children[0].src = 'img/light-icon.png';
    }
    else
    {
        document.querySelector('link').href = 'css/light.css';
        theme.children[0].src = 'img/dark-icon.png';
    }
    state = !state;
})