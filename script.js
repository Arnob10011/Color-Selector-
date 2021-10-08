const btnCheck = document.querySelector(".btn--check");
const testContainer = document.querySelector(".test--container");
const colorEl = document.querySelectorAll(".color");
const selectedColorEl = document.querySelector(".selected--color");
function openChecker() {
  // activate the test content
  testContainer.classList.add("test__container--active");

  // set colors to the elements
  const colors = createColors();
  for (let i = 0; i < colors.length; i++) {
    colorEl[i].textContent = colors[i];
    colorEl[i].style.backgroundColor = colors[i];
  }

  //   select the color
  const selectRandomColor = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[selectRandomColor];

  // set the selected color
  selectedColorEl.textContent = selectedColor;
  selectedColorEl.style.color = selectedColor;
}

btnCheck.addEventListener("click", openChecker);

function createColors() {
  // generating random color on a array
  const colorArr = Array(8)
    .fill()
    .map((el) => (el = "#" + Math.random().toString(16).slice(2, 8)));

  return colorArr;
}

function checkForHuman(e) {
  const color = e.target;
  if (!color.classList.contains("color")) return;
  console.log(color);

  const userSelectedColor = color.textContent;
  const generatedColor = selectedColorEl.textContent;

  if (generatedColor === userSelectedColor) {
    testContainer.classList.remove("test__container--active");
    btnCheck.textContent = "Success, Try Again";
    btnCheck.style.backgroundColor = "#76c893";
  }
}

colorEl.forEach((color) => {
  color.addEventListener("click", checkForHuman);
});
