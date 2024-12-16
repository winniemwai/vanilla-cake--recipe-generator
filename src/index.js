function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "2 ⅔ cups all-purpose flour, or more as needed",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
