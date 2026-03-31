//your JS code here. If required.
const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

// helper function for delay
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function to handle display
async function handleClick() {
  const text = textInput.value;
  const delay = Number(delayInput.value); // 🔥 important

  // clear previous output
  output.textContent = "";

  // wait for given delay
  await wait(delay);

  // display result
  output.textContent = text;
}

// event listener
btn.addEventListener("click", handleClick);