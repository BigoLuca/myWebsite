let req = new XMLHttpRequest();
req.open('GET', './user.json');
req.responseType = 'json';
req.send();
req.onload = function () {
    const user = req.response;
    console.log(user);
}