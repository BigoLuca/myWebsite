let h = document.querySelector('header');
console.log(location.getParameter("n"));

h.innerHTML = `
    <div class="topnav">
        <div class="sitetitle"><a href="index.html">My Website</a></div>
        <ul class="menu">
            <li><a href="blog.html">Blog</a></li>
            <li><a href="chart.html">Chart</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>`;
if (typeof location.getParameter("n") !== "undefined") {
    h.innerHTML += `<a href="#" class="login_btn"><i class="fa-solid fa-user"></i> ${location.getParameter("n")}</a>`;
}else {
    h.innerHTML += `<a href="login.html" class="login_btn"><i class="fa-solid fa-right-to-bracket"></i> Login</a>`;
}
h.innerHTML += `
        <div class="toggle_btn"><i class="fa-solid fa-bars"></i></div>
    </div>
    <div class="dropdown_menu">
        <li><a href="blog.html">Blog</a></li>
        <li><a href="chart.html">Chart</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="login.html" class="login_btn"><i class="fa-solid fa-right-to-bracket"></i> Login</a></li>
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

