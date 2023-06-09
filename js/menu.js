//let url = new URL("https://bigoluca.github.io/myWebsite/index.html");
//url.searchParams.append('n', "");
//window.location.href = url;
const param = new URLSearchParams(window.location.search).get('n');
let p = ["Login", "login.html?n=Login", "fa-solid fa-right-to-bracket"];
if (param !== null && param !== "Login") {
    p = [String(param), "#", "fa-solid fa-user"];
}

document.querySelector('header').innerHTML = `
    <div class="topnav">
        <div class="sitetitle"><a href="index.html?n=${p[0]}">My Website</a></div>
        <ul class="menu">
            <li><a href="blog.html?n=${p[0]}">Blog</a></li>
            <li><a href="chart.html?n=${p[0]}">Chart</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
        <a href="${p[1]}" class="login_btn"><i class="${p[2]}"></i> ${p[0]}</a>
        <div class="toggle_btn"><i class="fa-solid fa-bars"></i></div>
    </div>
    <div class="dropdown_menu">
        <li><a href="blog.html?n=${p[0]}">Blog</a></li>
        <li><a href="chart.html?n=${p[0]}">Chart</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="${p[1]}" class="login_btn"><i class="${p[2]}"></i> ${p[0]}</a></li>
    </div>
`;

const tobbleBtn = document.querySelector('.toggle_btn');
const tobbleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

tobbleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    
    tobbleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

const loginBtn = document.querySelector('.login_btn');
const loginBtnIcon = document.querySelector('.login_btn i');

loginBtn.onclick = function() {
    dropDownMenu.classList.toggle('logged');
    const isLogged = dropDownMenu.classList.contains('logged');

    loginBtnIcon.classList = isLogged ? 'fa-solid fa-user' : 'fa-solid fa-right-to-bracket';
}

