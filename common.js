const results = [
  'daikichi.png',
  'tyuukichi.png',
  'tyuukichi.png',
  'syoukichi.png',
  'syoukichi.png',
];

// DOM取得
const elem = document.getElementById('draw');      // おみくじボタン
const resetBtn = document.getElementById('reset'); // TOPにもどるボタン
const element = document.getElementById('start');  // おみくじ箱
const target = document.getElementById('draw');    // おみくじボタン
const fortune = document.getElementById("fortune");// 結果画像

// おみくじを引く
elem.addEventListener('click', function () {
  tatefuri();
});

// TOPにもどる
resetBtn.addEventListener('click', function () {
  resetScreen();
});

// --------------------------------
// ▼ フリフリ → 回転準備
// --------------------------------
function tatefuri() {
  element.animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-30px)' },
      { transform: 'translateY(0)' }
    ],
    {
      duration: 700,
      iterations: 3
    }
  );

  setTimeout(function () {
    kaiten();
  }, 2400);
}

// --------------------------------
// ▼ 回転（★このタイミングでボタン非表示）
// --------------------------------
function kaiten() {
  target.style.display = "none";

  const rotateAnim = element.animate(
    [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(180deg)' }
    ],
    {
      duration: 700,
      easing: 'linear',
      // fill: 'forwards' ←消す
    }
  );

  rotateAnim.onfinish = () => {
    // アニメーション終了後に強制的に値をセット
    element.style.transform = 'rotate(180deg)';
    touka();
  };
}


// --------------------------------
// ▼ 箱が消える → 結果へ
// --------------------------------
function touka() {
  const fadeAnim = element.animate(
    [
      { opacity: 1 },
      { opacity: 0 }
    ],
    {
      duration: 500,
      // fill: 'forwards' ←消す
    }
  );

  fadeAnim.onfinish = () => {
    element.style.opacity = 0;
    element.style.display = "none";
    fortuneAnime();
  };
}

// --------------------------------
// ▼ 結果表示（★同時にTOPにもどる表示）
// --------------------------------
function fortuneAnime() {

  // ★結果が出る瞬間に TOPにもどる ボタン表示
  resetBtn.style.display = "inline-block";

  const key = Math.floor(Math.random() * results.length);
  fortune.src = "img/" + results[key];

  fortune.animate(
    [
      { transform: 'translateY(0) scale(1)' },
      { transform: 'translateY(-30px)' },
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' },
      { transform: 'translateY(0) scale(1)' }
    ],
    {
      duration: 1000,
      fill: 'forwards'
    }
  );
}

// --------------------------------
// ▼ TOPにもどる（初期状態へ）
// --------------------------------
function resetScreen() {
  // 箱の表示と状態を完全リセット
  element.style.display = "inline-block";
  element.style.opacity = 1;
  element.style.transform = "rotate(0deg)";

  fortune.src = "";

  // ボタン切り替え
  resetBtn.style.display = "none";
  target.style.display = "block";
}
