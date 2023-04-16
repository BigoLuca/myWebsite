let users = [];
let req = new XMLHttpRequest();
req.open('GET', './user.json');
req.responseType = 'json';
req.send();
req.onload = function () {
    users = req.response;
}
const form = document.querySelector('.form_box');
Login();

//pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"

function Login(){
    form.innerHTML = `
    <form action="#">
        <h2>Login</h2>
        <div class="input_box">
            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            <input type="email" id="email" required>
            <label for="email">Email</label>
        </div>
        <div class="input_box">
            <span class="icon"><i class="fa-solid fa-lock"></i></span>
            <input type="password" id="password" required>
            <label for="password">Password</label>
        </div>
        <div class="remember_forgot">
            <label for=""><input type="checkbox"> Remember me</label>
            <a href="#forgot">Forgot your Password?</a>
        </div>
        <button type="button" class="submit_btn btn">Login</button>
        <div class="login_register">
            <p>Don't have an account? <button class="btn" onclick="Singin()"> Sing in</button></p>
        </div>
    </form>
    `;
    form.animate([{transform: "scale(0.2)"}, {transform: "scale(1)"}], {duration: 500});
}

function Singin() {
    form.innerHTML = `
        <h2>Create account</h2>
        <div class="input_box">
            <span class="icon"><i class="fa-solid fa-user"></i></span>
            <input type="text" required>
            <label for="username">Username</label>
        </div>
        <div class="input_box">
            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            <input type="email" required>
            <label for="email">Email</label>
        </div>
        <div class="input_box">
            <span class="icon"><i class="fa-solid fa-lock"></i></span>
            <input type="password" required>
            <label for="password">Password</label>
        </div>
        <div class="remember_forgot">
            <label for=""><input type="checkbox"> I agree term & conditions</label>
        </div>
        <button type="button" class="submit_btn btn">Register</button>
        <div class="login_register">
            <p>Already have an account? <button class="btn" onclick="Login()"> Login</a></p>
        </div>
    `;
    form.animate([{transform: "scale(0.2)"}, {transform: "scale(1)"}], {duration: 500});
}


document.querySelector('.submit_btn').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    users.forEach(e => {
        if(e["Email"] === email && e["Password"] === password){
            console.log("ok");
            let url = new URL("https://bigoluca.github.io/myWebsite/index.html");
            url.searchParams.append('n', e["Username"]);
            window.location.href = url
            
        }
    });
});
