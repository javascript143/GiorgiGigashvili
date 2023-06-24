function loginToSystem() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let result = document.getElementById('result');

    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData);

    for (let user of userData) {
        if (user.userName === username) {
            if (user.password === password) {
                result.innerHTML = 'You have logged in to the system!';
                result.style.color = "green";
                break;
            } else {
                result.innerHTML = "Error: password is incorrect!";
                result.style.color = "red";
                break;
            }
        } else {
            result.style.color = "red";
            result.innerHTML = "Error: username is incorrect!";
        }
    }

}
