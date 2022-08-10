window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let turtleInfo = document.getElementById("turtles");
    turtleInfo.setAttribute("class", "hidden");
    let snakeInfo = document.getElementById("snakes");
    snakeInfo.setAttribute("class", "hidden");
    let insectInfo = document.getElementById("insects");
    insectInfo.setAttribute("class", "hidden");

    const animal = document.querySelector("input#animalInput").value;

    if (animal === "turtles"){
      turtleInfo.removeAttribute("class");
    } else if (animal === "snakes") {
      snakeInfo.removeAttribute("class");
    } else if (animal === "insects") {
      insectInfo.removeAttribute("class");
    } else {
      window.alert("Error: We dont have that animal");
    }
  }
}