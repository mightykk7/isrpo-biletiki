const btn = document.querySelector('.lang');
let state = true;

const textrus =`<div class="up">
            <div class="logo">ЮристПро</div>
            <nav class="menu_nav">
                <a href="#">Услуги</a>
                <a href="#">Юристы</a>
                <a href="#">Констультация</a>
            </nav>
            <div class="menu_link">
                <a href="#"><img src="img/vk.png" alt="vk"></a>
                <a href="#"><img src="img/ok.png" alt="ok"></a>
                <a href="#"><img src="img/MAX.png" alt="max"></a>
            </div>
        </div>
        <div class="content">
            <div class="content_text">
                <p class="content_slogan">Набор лучших компаний</p>
                <h1 class="content_title">Ваш <span>надёжный</span> партнер в мире бизнеса</h1>
                <p class="content_desc">Комплексные юридические решения для роста и защиты вашего бизнеса - от стартапов до крупных компаний</p>
            </div>
            <form action="#" class="content_form">
                <div class="form_content">
                    <h2 class="form_title">Запишитесь на <span>консультацию</span> прямо сейчас</h2>
                    <div class="form_item">
                        <input type="text" placeholder="Введите ваше ФИО">
                        <input type="text" placeholder="Введите ваш номер телефона">
                        <input type="text" placeholder="Введите ваш электронный адрес">
                    </div>
                    <button class="form_btn">Записаться</button>
                </div>
            </form>
        </div>`;
const texting = `<div class="up">
            <div class="logo">ЮристПро</div>
            <nav class="menu_nav">
                <a href="#">Services</a>
                <a href="#">Lawyers</a>
                <a href="#">The constitution</a>
            </nav>
            <div class="menu_link">
                <a href="#"><img src="img/vk.png" alt="vk"></a>
                <a href="#"><img src="img/ok.png" alt="ok"></a>
                <a href="#"><img src="img/MAX.png" alt="max"></a>
            </div>
        </div>
        <div class="content">
            <div class="content_text">
                <p class="content_slogan">A set of the best companies</p>
                <h1 class="content_title">Your <span>reliable</span> business partner</h1>
                <p class="content_desc">Comprehensive legal solutions for the growth and protection of your business - from startups to large companies
            </div>
            <form action="#" class="content_form">
                <div class="form_content">
                <h2 class="form_title">Sign up for a <span>consultation</span> right now</h2>
                <div class="form_item">
                        <input type="text" placeholder="Enter your full NAME">
                        <input type="text" placeholder="Enter your phone number">
                        <input type="text" placeholder="Enter your email address">
                    </div>
                    <button class="form_btn">Sign up</button>
                </div>
            </form>
        </div>`;
btn.addEventListener('click', ()=>{
    if (state)
    {
        btn.children[0].src = "img/rus.png"
        document.querySelector('main').innerHTML = textrus;
    }
    else
    {
        btn.children[0].src = "img/grb.png"
        document.querySelector('main').innerHTML = texting;
    }
    state = !state;
})