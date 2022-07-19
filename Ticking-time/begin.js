// 1. Ticking Clock
// 2. Div with an id of 'clock'
// 3. Display the current hours, minutes, and seconds
// using a call back function

// my solution
// function displayTime(time) {
//   document.getElementById('clock').innerHTML = time;
// }

// function myTime(displayTime) {
//   const date = new Date().toUTCString();
//   displayTime(date);
// }

// myTime(displayTime);

// her solution
function clock() {
  const clockNode = document.querySelector('#clock');
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.textContent = tick;
  }, 1000);
}

clock();
