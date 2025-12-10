const box = document.getElementById("box");
const paper = document.getElementById("paper");
const retry = document.getElementById("retry");

const results = [
  { text: "大吉", color: "#e74c3c" },
  { text: "中吉", color: "#e67e22" },
  { text: "小吉", color: "#3498db" },
  { text: "末吉", color: "#9b59b6" },
  { text: "吉",   color: "#2ecc71" },
];

box.addEventListener("click", () => {
  const random = results[Math.floor(Math.random() * results.length)];

  paper.textContent = random.text;
  paper.style.color = random.color;

  paper.classList.add("show");
  retry.style.display = "inline-block";
});

retry.addEventListener("click", () => {
  paper.classList.remove("show");
  retry.style.display = "none";
});
