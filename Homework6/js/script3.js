function checkAge() {
    var names = [
      document.getElementById('name1').value,
      document.getElementById('name2').value,
      document.getElementById('name3').value
    ];
    
    var ages = [
      parseInt(document.getElementById('age1').value),
      parseInt(document.getElementById('age2').value),
      parseInt(document.getElementById('age3').value)
    ];
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ""; 
    
    var isAnyAgeBelow12 = ages.some(function(age, index) {
      if (age < 12) {
        resultElement.innerHTML += names[index] + " must be at least 12.<br>";
        return true; 
      } else {
        resultElement.innerHTML += names[index] + " vote successful.<br>";
        return false;
      }
    });
    
    if (!isAnyAgeBelow12) {
      resultElement.innerHTML += "All votes successful.";
    }
  }