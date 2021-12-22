function createMenu() {
    return `
    <header>
        <input type="checkbox" name="" id="toggler">
        <label for="toggler" class="fas fa-bars"></label>
        <a href="index.html" class="logo">Сладкоежка<span>.</span></a>
        <nav>
            <ul class="navbar">
                <li><a href="index.html">На главную</a> </li>
                <li><a href="about.html">О нас</a> </li>
                <li class="withsubmenu">
                    <a href="#products">Ассортимент<i class="fa fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="chocolate.html">Шоколад</a></li>
                        <li><a href="candies.html">Конфеты</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Связаться</a> </li>
            </ul>
        </nav>
        <div class="icons">
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-user"></a>
        </div>
    </header>
    `;
}

function createFooter() {
    return `
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Полезные ссылки</h3>
                <a href="#">Личный кабинет</a>
                <a href="#">Мои заказы</a>
                <a href="#">Избранное</a>
            </div>
            <div class="box">
                <h3>Филиалы</h3>
                <a href="#">Москва</a>
                <a href="#">Санкт-петербург</a>
                <a href="#">Екатеринбург</a>
                <a href="#">Брянск</a>
            </div>
            <div class="box">
                <h3>Наши контакты</h3>
                <a href="#">+123-456-7890</a>
                <a href="#">example@gmail.com</a>
                <a href="#">Москва, РТУ МИРЭА - ИКБО-03-20</a>
                <img src="images/payment.png" alt="">
            </div>
        </div>
        <div class="credit">
            Сделано студентом РТУ МИРЭА <span>Красовским М. П.</span>
        </div>
    </section>
    `;
}

const elementHeader = document.querySelector(".menu");
const elementFooter = document.querySelector(".footer");
elementHeader.innerHTML = createMenu();
elementFooter.innerHTML = createFooter();
