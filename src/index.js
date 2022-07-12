import "./styles.css";

var container = document.getElementById("container");

container.addEventListener("click", (event) => {
  // ***** FIRST WAY *****
  var closestEl = event.target.closest(".todo");
  if (!closestEl) return console.log("No todo selected");
  console.log(closestEl.id);

  // ***** Second Way *****
  closestEl = findClosestElementByClass(event.target, "todo");
  if (!closestEl) return console.log("No todo selected");
  console.log(closestEl.id);
});

function findClosestElementByClass(curr, targetClass) {
  while (curr && curr.classList && !curr.classList.contains(targetClass)) {
    curr = curr.parentNode;
  }
  return curr;
}
