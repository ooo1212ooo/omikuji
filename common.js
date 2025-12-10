document.getElementById("drawBtn").addEventListener("click", function() {

    // おみくじ結果のリスト
    const omikuji = [
        { name: "大吉", reward: "好きな化粧品をプレゼント🎁" },
        { name: "吉", reward: "サンプル化粧品プレゼント✨" },
        { name: "小吉", reward: "ポイント2倍💡" },
        { name: "末吉", reward: "ミニサービス追加💛" },
        { name: "凶", reward: "次回の運勢に期待…😇" }
    ];

    // ランダム抽選
    const result = omikuji[Math.floor(Math.random() * omikuji.length)];

    // 結果表示
    document.getElementById("result").innerHTML =
        `${result.name}<br><span style="font-size:18px">${result.reward}</span>`;
});
