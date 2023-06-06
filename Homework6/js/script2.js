function capitalizeFirstLetter() {
    var inputElement = document.getElementById('myInput');
    var inputValue = inputElement.value;
    var capitalizedText = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    
    var resultElement = document.getElementById('result');
    resultElement.textContent = capitalizedText;
  }