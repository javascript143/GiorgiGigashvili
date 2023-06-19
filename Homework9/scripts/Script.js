function registerNewUser() {
    let userDataFromDB = localStorage.getItem('userData');
    let userData = JSON.parse(userDataFromDB);
  
    let inputName = document.getElementById("Name").value;
    let inputSurname = document.getElementById("Surname").value;
    let inputCountry = document.getElementById("Country").value;
    let inputUsername = document.getElementById("Username").value;
    let inputPassword = document.getElementById("Password").value;
  
    userData.push({
      "Name": inputName,
      "surname": inputSurname,
      "country": inputCountry,
      "userName": inputUsername,
      "password": inputPassword
    });
  
    userDataFromDB = JSON.stringify(userData);
    localStorage.setItem('userData', userDataFromDB);
  }





