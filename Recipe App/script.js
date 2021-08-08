const form = document.querySelector("form");
const searchInput = document.getElementById("search");
const mealList = document.getElementById("meal");
const mealModal = document.querySelector(".meal-modal");
const recipe = document.querySelector(".recipe-content");
const closeBtn = document.querySelector(".close-btn");

const searchURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const lookupURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// Event Listeners
form.addEventListener("submit", getMeals);
mealList.addEventListener("click", getMealRecipe);
closeBtn.addEventListener("click", () => {
  mealModal.style.display = "none";
});

// Get Meals
async function getMeals() {
  let searchInputVal = searchInput.value.trim();
  const res = await fetch(`${searchURL}${searchInputVal}`);
  const data = await res.json();
  console.log(data);
  displayMeals(data.meals);
}
// Display Meals
function displayMeals(meals) {
  let html = "";
  if (meals) {
    meals.forEach((meal) => {
      html += `
      <div class="meal" data-id="${meal.idMeal}">
      <div class="meal-img">
        <img src="${meal.strMealThumb}" alt="" />
      </div>
      <div class="meal-name">
        <h3>${meal.strMeal}</h3>
        <a href="#" class="recipe-btn">View Recipe &rarr;</a>
      </div>
    </div>
      `;
    });
  } else {
    html = "No meal was found, please try again";
  }

  mealList.innerHTML = html;
}

// Get Recipe
async function getMealRecipe(e) {
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    const res = await fetch(`${lookupURL}${mealItem.dataset.id}`);
    const data = await res.json();
    console.log(data);
    displayRecipe(data.meals);
  }
}

// Display Recipe
function displayRecipe(meal) {
  meal = meal[0];
  let html = `
      <div class="recipe-img">
      <img src="${meal.strMealThumb}" alt="" />
    </div>
    <h2 class="recipe-title">${meal.strMeal}</h2>

    <div class="recipe-instruction">
      <h3>Instruction</h3>
      <p>
      ${meal.strInstructions}
      </p>
    </div>

    <div class="recipe-link">
      <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
  `;
  recipe.innerHTML = html;
  mealModal.style.display = "block";
}
