const CONFIG = {
  lineOfficialUrl: "https://lin.ee/lOAwxR9",
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
    name: "中文", brand: "竹縣回收凍好查", eyebrow: "用AI查詢完成回收任務",
    title: "多語智慧<br><span>回收挑戰</span>", lead: "先用凍好查尋找答案，再完成3道生活回收任務！",
    questions: "道題目", languages: "種語言", minute: "分鐘完成", start: "下一步：開啟凍好查",
    helper: "先準備好LINE查詢工具，再開始尋找答案", next: "下一題", finish: "查看結果",
    lineEyebrow: "第2步｜準備查詢工具", lineTitle: "先加入或開啟<br>「竹縣回收凍好查」",
    lineIntro: "接下來的3道題目，請使用凍好查的AI智慧查詢尋找答案。",
    lineInstruction1: "點擊下方按鈕，加入或開啟LINE官方帳號", lineInstruction2: "完成後回到這個活動頁面", lineInstruction3: "依每題提示輸入品項，再選出答案",
    openOfficialLine: "開啟凍好查LINE", ready: "我已準備好，開始找答案", returnTip: "開啟LINE後，請使用手機的「返回」功能回到本頁。",
    qrTitle: "使用其他裝置？", qrCopy: "可開啟LINE掃描此QR Code加入好友",
    lookupLabel: "先用凍好查找答案", lookupInstruction: "請在LINE輸入「{term}」，查看AI回覆後再作答。", openLookup: "開啟LINE查詢",
    progress: "第 {current} 題／共 {total} 題", score: "{score} 分", correct: "答對了！", wrong: "再認識一下",
    completeEyebrow: "挑戰完成", completeTitle: "你完成了多語智慧回收挑戰！",
    completeCopy: "現在前往「竹縣回收凍好查」LINE 官方帳號，加入或開啟好友即可取得抽獎資格。",
    goLine: "前往 LINE 參加抽獎", notice: "每一 LINE 帳號限取得抽獎資格 1 次；獎品數量有限，送完為止。",
    restart: "再挑戰一次", serviceTitle: "還有回收問題嗎？",
    serviceCopy: "進入凍好查後，直接輸入想查詢的品項，AI 會快速回覆分類與處理方式。",
    sponsor: "環境部資源循環署補助", advertiser: "新竹縣政府環境保護局廣告", back: "返回"
  },
  en: {
    name: "English", brand: "Hsinchu Recycling Guide", eyebrow: "Use AI search to complete each task",
    title: "Smart Multilingual<br><span>Recycling Challenge</span>", lead: "Find each answer with the Recycling Guide, then complete 3 everyday recycling tasks!",
    questions: "questions", languages: "languages", minute: "minute", start: "Next: open Recycling Guide",
    helper: "Prepare the LINE search tool before finding the answers", next: "Next question", finish: "View result",
    lineEyebrow: "Step 2 | Prepare your search tool", lineTitle: "Add or open the<br>Hsinchu Recycling Guide",
    lineIntro: "Use the AI search in the Recycling Guide to find the answers to the next 3 questions.",
    lineInstruction1: "Tap the button below to add or open the LINE Official Account", lineInstruction2: "Return to this activity page", lineInstruction3: "Enter the item shown in each task, then choose your answer",
    openOfficialLine: "Open Recycling Guide on LINE", ready: "I'm ready—find the answers", returnTip: "After opening LINE, use your phone's Back function to return here.",
    qrTitle: "Using another device?", qrCopy: "Scan this QR Code with LINE to add the account",
    lookupLabel: "Find the answer first", lookupInstruction: "Type “{term}” in LINE, read the AI reply, then answer.", openLookup: "Open LINE search",
    progress: "Question {current} of {total}", score: "{score} pts", correct: "Correct!", wrong: "Good to know",
    completeEyebrow: "Challenge complete", completeTitle: "You completed the Smart Multilingual Recycling Challenge!",
    completeCopy: "Go to the Hsinchu Recycling Guide LINE Official Account. Add or open the account to receive your prize draw entry.",
    goLine: "Enter the draw on LINE", notice: "Each LINE account may receive one entry only. Prizes are limited and available while supplies last.",
    restart: "Try again", serviceTitle: "Still have a recycling question?",
    serviceCopy: "Type the item in the Recycling Guide. AI will quickly tell you how to sort and dispose of it.",
    sponsor: "Subsidized by Resource Circulation Administration, MOENV", advertiser: "Advertisement by Hsinchu County EPB", back: "Back"
  },
  vi: {
    name: "Tiếng Việt", brand: "Tra cứu tái chế Tân Trúc", eyebrow: "Dùng AI để hoàn thành nhiệm vụ tái chế",
    title: "Thử thách tái chế<br><span>thông minh đa ngôn ngữ</span>", lead: "Tìm đáp án bằng công cụ tra cứu rồi hoàn thành 3 nhiệm vụ tái chế thực tế!",
    questions: "câu hỏi", languages: "ngôn ngữ", minute: "phút", start: "Tiếp theo: mở công cụ tra cứu",
    helper: "Chuẩn bị công cụ tra cứu LINE trước khi tìm đáp án", next: "Câu tiếp theo", finish: "Xem kết quả",
    lineEyebrow: "Bước 2 | Chuẩn bị công cụ tra cứu", lineTitle: "Thêm bạn hoặc mở<br>Tra cứu tái chế Tân Trúc",
    lineIntro: "Hãy dùng chức năng AI trên LINE để tìm đáp án cho 3 câu hỏi tiếp theo.",
    lineInstruction1: "Nhấn nút bên dưới để thêm hoặc mở tài khoản LINE chính thức", lineInstruction2: "Quay lại trang hoạt động này", lineInstruction3: "Nhập vật phẩm theo gợi ý của từng câu rồi chọn đáp án",
    openOfficialLine: "Mở công cụ tra cứu trên LINE", ready: "Tôi đã sẵn sàng—bắt đầu tìm đáp án", returnTip: "Sau khi mở LINE, hãy dùng nút Quay lại trên điện thoại để trở về trang này.",
    qrTitle: "Dùng thiết bị khác?", qrCopy: "Mở LINE và quét mã QR này để thêm bạn",
    lookupLabel: "Trước tiên hãy tìm đáp án", lookupInstruction: "Nhập “{term}” trên LINE, xem trả lời của AI rồi chọn đáp án.", openLookup: "Mở LINE để tra cứu",
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
    zh: { term: "寶特瓶", q: "根據凍好查的回覆，喝完的寶特瓶，回收前應該怎麼處理？", a: ["倒空內容物並簡單清潔", "裝進一般垃圾袋", "保留飲料再一起回收"], correct: 0, note: "請先倒空內容物、簡單清潔，再交付資源回收。" },
    en: { term: "PET bottle", q: "According to the Recycling Guide, what should you do with an empty PET bottle before recycling it?", a: ["Empty and rinse it", "Put it in general waste", "Leave the drink inside"], correct: 0, note: "Empty the bottle, give it a quick rinse, and then recycle it." },
    vi: { term: "chai nhựa PET", q: "Theo hướng dẫn tra cứu, trước khi tái chế chai nhựa PET đã uống hết, bạn nên làm gì?", a: ["Đổ hết và rửa sơ", "Bỏ vào rác thường", "Để nguyên đồ uống bên trong"], correct: 0, note: "Hãy đổ hết chất lỏng, rửa sơ rồi giao cho đơn vị thu gom tái chế." }
  },
  {
    icon: "🔋",
    zh: { term: "鋰電池", q: "根據凍好查的回覆，廢鋰電池交付回收前，最重要的安全步驟是什麼？", a: ["泡水降溫", "用絕緣膠帶貼住正負極", "和一般垃圾混在一起"], correct: 1, note: "請用絕緣膠帶貼住正、負極，分開存放並儘速交付回收，避免短路起火。" },
    en: { term: "lithium battery", q: "According to the Recycling Guide, what is the key safety step before recycling a used lithium battery?", a: ["Soak it in water", "Tape over both terminals", "Mix it with general waste"], correct: 1, note: "Cover both terminals with insulating tape, store separately, and recycle promptly to prevent a short circuit." },
    vi: { term: "pin lithium", q: "Theo hướng dẫn tra cứu, bước an toàn quan trọng nhất trước khi tái chế pin lithium là gì?", a: ["Ngâm pin trong nước", "Dán băng keo cách điện lên hai cực", "Trộn với rác thường"], correct: 1, note: "Dán băng keo cách điện lên hai cực, bảo quản riêng và sớm giao cho nơi thu gom để tránh đoản mạch." }
  },
  {
    icon: "🥡",
    zh: { term: "紙餐盒", q: "根據凍好查的回覆，吃完便當後，紙餐盒應該怎麼處理？", a: ["清除剩食、簡單清潔後回收", "連同剩食直接回收", "一定只能丟一般垃圾"], correct: 0, note: "先清除剩食並簡單清潔，再交付資源回收；剩食則依規定分類。" },
    en: { term: "paper meal box", q: "According to the Recycling Guide, how should you handle a used paper meal box?", a: ["Remove leftovers, rinse, and recycle", "Recycle it with leftovers inside", "Always put it in general waste"], correct: 0, note: "Remove food residue, give the box a quick rinse, then recycle it. Sort leftovers according to local rules." },
    vi: { term: "hộp cơm giấy", q: "Theo hướng dẫn tra cứu, hộp cơm giấy sau khi dùng nên được xử lý như thế nào?", a: ["Bỏ thức ăn thừa, rửa sơ rồi tái chế", "Tái chế cùng với thức ăn thừa", "Luôn bỏ vào rác thường"], correct: 0, note: "Loại bỏ thức ăn thừa, rửa sơ hộp rồi giao tái chế. Phân loại thức ăn thừa theo quy định địa phương." }
  }
];

let lang = localStorage.getItem("recycling-language") || "zh";
let languageSelected = false;
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
  $$("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(languageSelected && button.dataset.lang === lang)));
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
  $("#stepBadge").textContent = `STEP ${String(current + 3).padStart(2, "0")} / 05`;
  $("#questionVisual").textContent = questions[current].icon;
  $("#questionNumber").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;
  $("#questionText").textContent = data.q;
  $("#lookupInstruction").textContent = format(copy[lang].lookupInstruction, { term: data.term });
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

function showLineSetup() {
  $("#stepBadge").textContent = "STEP 02 / 05";
  showScreen("lineScreen");
}

function finishQuiz() {
  $("#stepBadge").textContent = "COMPLETE";
  $("#finalScore").textContent = score;
  const source = new URLSearchParams(location.search).get("source");
  const url = new URL(CONFIG.lineLotteryUrl, location.href);
  if (source) url.searchParams.set("source", source);
  $("#lineButton").href = url.toString();
  showScreen("resultScreen");
}

$$("[data-lang]").forEach((button) => button.addEventListener("click", () => {
  languageSelected = true;
  applyLanguage(button.dataset.lang);
  $("#startButton").disabled = false;
}));

$("#officialLineButton").href = CONFIG.lineOfficialUrl;
$(".lookup-button").href = CONFIG.lineOfficialUrl;
$("#startButton").addEventListener("click", showLineSetup);
$("#readyButton").addEventListener("click", startQuiz);
function returnToLanguageStep() {
  $("#stepBadge").textContent = "STEP 01 / 05";
  showScreen("welcomeScreen");
}

$("#restartButton").addEventListener("click", returnToLanguageStep);
$("#backButton").addEventListener("click", returnToLanguageStep);
$("#lineBackButton").addEventListener("click", returnToLanguageStep);
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
