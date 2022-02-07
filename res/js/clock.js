// Clock selector
const clock = document.querySelector("h2#clock");

// Clock function
function getClock() {
  // My code[change date]
  const date = new Date().toTimeString().split(" ")[0]; // blank value ==> fill 0

  /* [Study code]
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const sconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${sconds}`;
  */

  // Time value
  clock.innerText = `${date}`; // h2 play date
}

// callback Clock
getClock();

// play clock event
setInterval(getClock, 1000); // delay fucntion event (function, play time);
