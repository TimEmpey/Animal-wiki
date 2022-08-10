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

    if (animalInput === "turtle"){
      turtleInfo.removeAttribute("class", "hidden");
    } else if {
      snakeInfo.removeAttribute("class", "hidden");
    } else {
      insectInfo.removeAttribute("class", "hidden");
    }
  }
}