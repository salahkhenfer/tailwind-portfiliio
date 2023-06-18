const hutten = document.getElementById("darkMode");
const htmll = document.getElementById("html");
let count = 0;
console.log(htmll);
hutten.addEventListener("click", () => {
  count = !count;
  if (count) {
    document.body.classList.add("bg-gray-900");
    htmll.classList.add("dark");
  } else {
    document.body.classList.remove("bg-gray-900");
    htmll.classList.remove("dark");
  }

  console.log("fds");
});
