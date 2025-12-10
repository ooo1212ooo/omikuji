const box = document.getElementById("box");
const paper = document.getElementById("paper");
const retry = document.getElementById("retry");

const results = [
  { text: "大吉 🎯", color: "#d32f2f" },
  { text: "中吉 😊", color: "#f57c00" },
  { text: "小吉 🙂", color: "#1976d2" },
  { text: "末吉 😌", color: "#7b1fa2" },
  { text: "吉 👍", color: "#388e3c" }
];

box.addEventListener("click", function() {
  const r = results[Math.floor(Math.random() * results.length)];
  paper.textContent = r.text;
  paper.style.color = r.color;

  paper.classList.add("show");
  retry.style.display = "inline-block";
});

retry.addEventListener("click", function() {
  paper.classList.remove("show");
  retry.style.display = "none";
});
