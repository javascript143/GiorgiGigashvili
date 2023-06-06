function filterFoods() {
  const foodInput = document.getElementById("foodInput");
  const foodNames = foodInput.value.split(",").map((food) => food.trim());

  const goodFoods = foodNames.filter((food) => {
    // Define your criteria for good food here
    return food === "Salad" || food === "Apple" || food === "Tomato";
  });

  const badFoods = foodNames.filter((food) => {
    // Define your criteria for bad food here
    return food === "Pizza" || food === "Ice Cream" || food === "Burger";
  });

  const container = document.getElementById("resultContainer");
  container.innerHTML = "";

  goodFoods.forEach((food) => {
    const p = document.createElement("p");
    p.textContent = food + " Is Good Food";
    container.appendChild(p);
  });

  badFoods.forEach((food) => {
    const p = document.createElement("p");
    p.textContent = food + " Is Bad Food";
    container.appendChild(p);
  });
}