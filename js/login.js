let users = [];
let req = new XMLHttpRequest();
req.open('GET', './user.json');
req.responseType = 'json';
req.send();
req.onload = function () {
    users = req.response;
    console.log(users);
}

const sb_btn = document.querySelector('.submit_btn').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    users.forEach(e => {
        if(e["Email"] === email && e["Password"] === password){
            console.log("ok");
            window.location.replace("https://bigoluca.github.io/myWebsite/");
        }
    });
});
