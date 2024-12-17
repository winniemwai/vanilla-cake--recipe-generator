function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o43a8f57ft70fd8b00ada9b587fc3111";
  let context =
    " You are a cake  expert who knows many types of recipes.Your mission is to generate a simple recipe in basic HTML format and separate each line with <br/>.Make sure to follow the user instruction.You can include a title to the recipe. do not include the word HTML in the recipe";
  let prompt = `User instructions: Generate a recipe on ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a simple  cake recipe about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
