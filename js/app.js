const name = "Irlan Navila";

const words = [
  "Hai Kamu ❤️",
  "Yang Lagi Ngambek 🥰🥰",
  "udahan dong marahnya 🥳🥳",
  "Aku Kangen :)",
  "Balikan lagi yah ><",
  "Klik tombol Lovenya dong",
];

function asdasda() {
  const spanContainer = document.getElementById("span-container");

  words.map((word) => {
    const span = document.createElement("span");
    span.innerText = word;
    spanContainer.appendChild(span);
  });
}

asdasda();

function runningText() {
  let spanContainerRunning = document.getElementById("span-container");
  spanContainerRunning.style.transform = "translateX(-15300px)";
}

window.addEventListener("load", runningText);
// let spanContainerRunning = document.getElementById("span-container");

// setInterval(function () {
//   spanContainerRunning.style.transform = "translateX(-15300px)";
// }, 10);
