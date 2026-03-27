const card = `<div class="card">
            <div class="front">
                <div class="card_img">
                    <img src="img/1.jpg" alt="hoimg">
                </div>
                <div class="card_text">
                    <div class="card_up">
                        <div class="card_title">Название продукта</div>
                        <div class="card_info">
                            <div class="card_count">
                                <button class="minus">-</button>
                                <span>1</span>
                                <button class="plus">+</button>
                            </div><p class="card_price">100 Руб.</p>
                        </div>
                    </div>
                    <p class="card_desc">Краткое описание продукта или товара</p>
                    <button class="card_btn">Добавить в корзину</button>
                </div>
                </div>
            <div class="back">
            </div>
        </div>`;
for (let i=0; i<12;i++){
    document.querySelector('main').innerHTML += card;
}      
const cards = document.querySelectorAll('.card');
let i = 1;
cards.forEach(item=>{
    let state = true;
    item.addEventListener('click',()=>{
        
        console.log(state)
        i++;
        if(state == true){
            item.children[1].style.zIndex = i;
            item.style.transform = `rotateY(180deg)`;
        }else{
            item.style.transform = `rotateY(0deg)`;
            item.children[0].style.zIndex = i;
            
        }
        state = !state
    })
    let count = 1;
    let price = 100;
    item.querySelector('.minus').addEventListener('click', ()=>{
        const span = item.querySelector('span');
        
        if (span.textContent >1)
        {
            count--;
            span.textContent -=1;
            price -= 100;
            item.querySelector('.card_price').textContent = `${price} Руб`;
        }
        else{
            span.textContent = span.textContent;
        }
    })
    item.querySelector('.plus').addEventListener('click', ()=>{
        const span = item.querySelector('span');
        
        if (span.textContent <10)
        {
            count++;
            span.textContent = count;
            price += 100;
            item.querySelector('.card_price').textContent = `${price} Руб`;
        }
        else{
            span.textContent = span.textContent;
        }
    })
})