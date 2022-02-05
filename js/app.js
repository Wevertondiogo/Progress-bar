const input = document.querySelector(".form-control");
input.addEventListener('input', setWidthInProgressItem);

/**
 * 
 * @param { Event } event 
 */
function setWidthInProgressItem(event) {
  const progressItem = document.querySelector(".progress-item");
  const target = event.target;

  if(!isNumber(target.value)) {
    alert("Please type a number");
    target.value = "";
    progressItem.style.width = 0;
  }
  progressItem.style.width = `${target.value}px`;
}
/**
 * 
 * @param {String} value 
 * @returns
 */
function isNumber(value) {
  return Number.isFinite(+value) || (value === "Backspace" || value === "Delete");
}