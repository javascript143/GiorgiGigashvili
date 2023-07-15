const form = document.querySelector('form');
const userChoice = document.querySelector('#password');
const userEmail = document.querySelector('#email');





function emailChecker() {
    const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    const email = document.getElementById('email').value;
    const emailbox = document.getElementById('email');

    let result = document.getElementById('emailResult');

    if (pattern.test(email)) {
        result.style.color = 'green';
        result.value = 'email is valid';
        emailbox.style.borderColor = 'green';
    } else {
        result.style.color = 'red';
        result.innerHTML = 'email is invalid';
        emailbox.style.borderColor = 'red';
    }

    
}


function passwordChecker() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const password = document.getElementById('password').value;
    const passbox = document.getElementById('password');

    let result = document.getElementById('passwordResult');

    if (pattern.test(password)) {
        result.style.color = 'green';
        result.innerHTML = 'Password is valid';
        passbox.style.borderColor = 'green';
    } else {
        result.style.color = 'red';
        result.innerHTML = 'Password is invalid';
        passbox.style.borderColor = 'red';
    }

}

function numberChecker() {
    const pattern = /^[0-9]{7,12}$/;
    const number = document.getElementById('phoneNumber').value;
    const numbox = document.getElementById('phoneNumber');
    let result = document.getElementById('numberResult');
  
    if (pattern.test(number)) {
      result.style.color = 'green';
      result.innerHTML = 'Number is valid';
      numbox.style.borderColor = 'green';
    } else {
      result.style.color = 'red';
      result.innerHTML = 'Number is invalid';
      numbox.style.borderColor = 'red';
    }
  }
  

function handleRegistration() {
    let fullName = document.getElementById('fullName').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;

    if (fullName === '' || username === '' || email === '' || phoneNumber === '' || password === '') {
        alert('Please fill in all the required fields.');
        return;
    }

    emailChecker();
    passwordChecker();


    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let user = {
        fullName: fullName,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
    }

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
    }
}