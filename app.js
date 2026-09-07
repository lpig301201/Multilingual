const CONFIG = {
  // 正式上線前，請將下方網址替換為 OA Plus 抽獎活動連結。
  lineLotteryUrl: "https://line.me/",
  sources: {
    longterm: {
      zh: "合作單位：新竹縣政府高齡長照處",
      en: "Partner: Department of Senior and Long-term Care",
      vi: "Đơn vị phối hợp: Sở Chăm sóc Người cao tuổi và Dài hạn"
    },
    migrant: {
      zh: "合作單位：新竹縣移工諮詢服務中心",
      en: "Partner: Hsinchu County Migrant Worker Consultation Service Center",
      vi: "Đơn vị phối hợp: Trung tâm Tư vấn Lao động Di trú Huyện Tân Trúc"
    },
    jobcenter: {
      zh: "合作單位：勞動部竹北就業中心",
      en: "Partner: Zhubei Employment Center, Ministry of Labor",
      vi: "Đơn vị phối hợp: Trung tâm Việc làm Trúc Bắc, Bộ Lao động"
    }
  }
};

const copy = {
  zh: {
    name: "中文", brand: "竹縣回收凍好查", eyebrow: "1分鐘認識正確回收方式",
    title: "多語智慧<br><span>回收挑戰</span>", lead: "完成 3 道生活情境題，看看你有多懂資源回收！",
    questions: "道題目", languages: "種語言", minute: "分鐘完成", start: "開始挑戰",
    helper: "完成後即可前往 LINE 參加抽獎", next: "下一題", finish: "查看結果",
    progress: "第 {current} 題／共 {total} 題", score: "{score} 分", correct: "答對了！", wrong: "再認識一下",
    completeEyebrow: "挑戰完成", completeTitle: "你完成了多語智慧回收挑戰！",
    completeCopy: "現在前往「竹縣回收凍好查」LINE 官方帳號，加入或開啟好友即可取得抽獎資格。",
    goLine: "前往 LINE 參加抽獎", notice: "每一 LINE 帳號限取得抽獎資格 1 次；獎品數量有限，送完為止。",
    restart: "再挑戰一次", serviceTitle: "還有回收問題嗎？",
    serviceCopy: "進入凍好查後，直接輸入想查詢的品項，AI 會快速回覆分類與處理方式。",
    sponsor: "環境部資源循環署補助", advertiser: "新竹縣政府環境保護局廣告", back: "返回"
  },
  en: {
    name: "English", brand: "Hsinchu Recycling Guide", eyebrow: "Learn proper recycling in one minute",
    title: "Smart Multilingual<br><span>Recycling Challenge</span>", lead: "Answer 3 everyday questions and test your recycling knowledge!",
    questions: "questions", languages: "languages", minute: "minute", start: "Start challenge",
    helper: "Complete the challenge to enter the LINE prize draw", next: "Next question", finish: "View result",
    progress: "Question {current} of {total}", score: "{score} pts", correct: "Correct!", wrong: "Good to know",
    completeEyebrow: "Challenge complete", completeTitle: "You completed the Smart Multilingual Recycling Challenge!",
    completeCopy: "Go to the Hsinchu Recycling Guide LINE Official Account. Add or open the account to receive your prize draw entry.",
    goLine: "Enter the draw on LINE", notice: "Each LINE account may receive one entry only. Prizes are limited and available while supplies last.",
    restart: "Try again", serviceTitle: "Still have a recycling question?",
    serviceCopy: "Type the item in the Recycling Guide. AI will quickly tell you how to sort and dispose of it.",
    sponsor: "Subsidized by Resource Circulation Administration, MOENV", advertiser: "Advertisement by Hsinchu County EPB", back: "Back"
  },
  vi: {
    name: "Tiếng Việt", brand: "Tra cứu tái chế Tân Trúc", eyebrow: "Tìm hiểu cách tái chế đúng trong 1 phút",
    title: "Thử thách tái chế<br><span>thông minh đa ngôn ngữ</span>", lead: "Hoàn thành 3 câu hỏi thực tế để kiểm tra kiến thức tái chế của bạn!",
    questions: "câu hỏi", languages: "ngôn ngữ", minute: "phút", start: "Bắt đầu thử thách",
    helper: "Hoàn thành để tham gia rút thăm trên LINE", next: "Câu tiếp theo", finish: "Xem kết quả",
    progress: "Câu {current} / {total}", score: "{score} điểm", correct: "Chính xác!", wrong: "Hãy ghi nhớ nhé",
    completeEyebrow: "Đã hoàn thành", completeTitle: "Bạn đã hoàn thành Thử thách tái chế thông minh đa ngôn ngữ!",
    completeCopy: "Hãy mở tài khoản LINE chính thức “Tra cứu tái chế Tân Trúc”. Thêm bạn hoặc mở tài khoản để nhận lượt rút thăm.",
    goLine: "Tham gia rút thăm trên LINE", notice: "Mỗi tài khoản LINE chỉ được nhận 1 lượt. Quà tặng có hạn, chương trình kết thúc khi hết quà.",
    restart: "Thử lại", serviceTitle: "Bạn còn thắc mắc về tái chế?",
    serviceCopy: "Nhập tên vật phẩm vào hệ thống. AI sẽ nhanh chóng hướng dẫn cách phân loại và xử lý.",
    sponsor: "Được Cục Tuần hoàn Tài nguyên, Bộ Môi trường tài trợ", advertiser: "Quảng cáo của Cục Bảo vệ Môi trường Huyện Tân Trúc", back: "Quay lại"
  }
};

const questions = [
  {
    icon: "🧴",
    zh: { q: "喝完的寶特瓶，回收前應該怎麼處理？", a: ["倒空內容物並簡單清潔", "裝進一般垃圾袋", "保留飲料再一起回收"], correct: 0, note: "請先倒空內容物、簡單清潔，再交付資源回收。" },
    en: { q: "What should you do with an empty PET bottle before recycling it?", a: ["Empty and rinse it", "Put it in general waste", "Leave the drink inside"], correct: 0, note: "Empty the bottle, give it a quick rinse, and then recycle it." },
    vi: { q: "Trước khi tái chế chai nhựa PET đã uống hết, bạn nên làm gì?", a: ["Đổ hết và rửa sơ", "Bỏ vào rác thường", "Để nguyên đồ uống bên trong"], correct: 0, note: "Hãy đổ hết chất lỏng, rửa sơ rồi giao cho đơn vị thu gom tái chế." }
  },
  {
    icon: "🔋",
    zh: { q: "廢鋰電池要交付回收前，最重要的安全步驟是什麼？", a: ["泡水降溫", "用絕緣膠帶貼住正負極", "和一般垃圾混在一起"], correct: 1, note: "請用絕緣膠帶貼住正、負極，分開存放並儘速交付回收，避免短路起火。" },
    en: { q: "What is the key safety step before recycling a used lithium battery?", a: ["Soak it in water", "Tape over both terminals", "Mix it with general waste"], correct: 1, note: "Cover both terminals with insulating tape, store separately, and recycle promptly to prevent a short circuit." },
    vi: { q: "Bước an toàn quan trọng nhất trước khi tái chế pin lithium đã qua sử dụng là gì?", a: ["Ngâm pin trong nước", "Dán băng keo cách điện lên hai cực", "Trộn với rác thường"], correct: 1, note: "Dán băng keo cách điện lên hai cực, bảo quản riêng và sớm giao cho nơi thu gom để tránh đoản mạch." }
  },
  {
    icon: "🥡",
    zh: { q: "吃完便當後，紙餐盒應該怎麼處理？", a: ["清除剩食、簡單清潔後回收", "連同剩食直接回收", "一定只能丟一般垃圾"], correct: 0, note: "先清除剩食並簡單清潔，再交付資源回收；剩食則依規定分類。" },
    en: { q: "How should you handle a used paper meal box?", a: ["Remove leftovers, rinse, and recycle", "Recycle it with leftovers inside", "Always put it in general waste"], correct: 0, note: "Remove food residue, give the box a quick rinse, then recycle it. Sort leftovers according to local rules." },
    vi: { q: "Hộp cơm giấy sau khi dùng nên được xử lý như thế nào?", a: ["Bỏ thức ăn thừa, rửa sơ rồi tái chế", "Tái chế cùng với thức ăn thừa", "Luôn bỏ vào rác thường"], correct: 0, note: "Loại bỏ thức ăn thừa, rửa sơ hộp rồi giao tái chế. Phân loại thức ăn thừa theo quy định địa phương." }
  }
];

let lang = localStorage.getItem("recycling-language") || "zh";
let current = 0;
let score = 0;
let answered = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const screens = $$(".screen");

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function format(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key]);
}

function applyLanguage(nextLang) {
  lang = nextLang;
  localStorage.setItem("recycling-language", lang);
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : lang;
  document.title = lang === "zh" ? "多語智慧回收挑戰｜竹縣回收凍好查" : lang === "en" ? "Smart Multilingual Recycling Challenge" : "Thử thách tái chế thông minh đa ngôn ngữ";
  $$('[data-i18n]').forEach((el) => {
    const value = copy[lang][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
  $("#currentLanguage").textContent = copy[lang].name;
  $$("[data-lang]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.lang === lang)));
  $("#backButton").setAttribute("aria-label", copy[lang].back);
  updateSource();
  if ($("#quizScreen").classList.contains("active")) renderQuestion();
}

function updateSource() {
  const source = new URLSearchParams(location.search).get("source");
  const item = CONFIG.sources[source];
  $("#sourceLabel").textContent = item ? item[lang] : "";
}

function renderQuestion() {
  answered = false;
  const data = questions[current][lang];
  $("#questionVisual").textContent = questions[current].icon;
  $("#questionNumber").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;
  $("#questionText").textContent = data.q;
  $("#progressLabel").textContent = format(copy[lang].progress, { current: current + 1, total: questions.length });
  $("#scoreLabel").textContent = format(copy[lang].score, { score });
  $("#progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  $(".progress-track").setAttribute("aria-valuenow", String(current + 1));
  $("#feedback").className = "feedback";
  $("#feedback").innerHTML = "";
  $("#nextButton").disabled = true;
  $("#nextButton").querySelector("span").textContent = current === questions.length - 1 ? copy[lang].finish : copy[lang].next;
  $("#answers").innerHTML = data.a.map((answer, index) => `
    <button class="answer-button" type="button" data-answer="${index}">
      <span class="letter">${String.fromCharCode(65 + index)}</span><span>${answer}</span>
    </button>`).join("");
  $$(".answer-button").forEach((button) => button.addEventListener("click", selectAnswer));
}

function selectAnswer(event) {
  if (answered) return;
  answered = true;
  const selected = Number(event.currentTarget.dataset.answer);
  const data = questions[current][lang];
  const isCorrect = selected === data.correct;
  if (isCorrect) score += 1;
  $$(".answer-button").forEach((button, index) => {
    button.disabled = true;
    if (index === data.correct) button.classList.add("correct");
    if (index === selected && !isCorrect) button.classList.add("wrong");
  });
  $("#feedback").innerHTML = `<strong>${isCorrect ? copy[lang].correct : copy[lang].wrong}</strong>${data.note}`;
  $("#feedback").classList.add("show");
  $("#scoreLabel").textContent = format(copy[lang].score, { score });
  $("#nextButton").disabled = false;
}

function startQuiz() {
  current = 0;
  score = 0;
  renderQuestion();
  showScreen("quizScreen");
}

function finishQuiz() {
  $("#finalScore").textContent = score;
  const source = new URLSearchParams(location.search).get("source");
  const url = new URL(CONFIG.lineLotteryUrl, location.href);
  if (source) url.searchParams.set("source", source);
  $("#lineButton").href = url.toString();
  showScreen("resultScreen");
}

$("#languageButton").addEventListener("click", () => {
  const menu = $("#languageMenu");
  const open = menu.classList.toggle("open");
  $("#languageButton").setAttribute("aria-expanded", String(open));
});

$$("[data-lang]").forEach((button) => button.addEventListener("click", () => {
  applyLanguage(button.dataset.lang);
  $("#languageMenu").classList.remove("open");
  $("#languageButton").setAttribute("aria-expanded", "false");
}));

document.addEventListener("click", (event) => {
  if (!event.target.closest(".topbar")) {
    $("#languageMenu").classList.remove("open");
    $("#languageButton").setAttribute("aria-expanded", "false");
  }
});

$("#startButton").addEventListener("click", startQuiz);
$("#restartButton").addEventListener("click", startQuiz);
$("#backButton").addEventListener("click", () => showScreen("welcomeScreen"));
$("#nextButton").addEventListener("click", () => {
  if (!answered) return;
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

applyLanguage(lang);
