const CONFIG = {
  lineOfficialUrl: "https://lin.ee/lOAwxR9",
  // 正式上線前，請將下方網址替換為 OA Plus 抽獎活動連結。
  lineLotteryUrl: "https://line.me/",
  sources: {
    longterm: {
      en: "Partner: Department of Senior and Long-term Care",
      vi: "Đơn vị phối hợp: Sở Chăm sóc Người cao tuổi và Dài hạn"
    },
    migrant: {
      en: "Partner: Hsinchu County Migrant Worker Consultation Service Center",
      vi: "Đơn vị phối hợp: Trung tâm Tư vấn Lao động Di trú Huyện Tân Trúc"
    },
    jobcenter: {
      en: "Partner: Zhubei Employment Center, Ministry of Labor",
      vi: "Đơn vị phối hợp: Trung tâm Việc làm Trúc Bắc, Bộ Lao động"
    }
  }
};

const copy = {
  en: {
    name: "English", brand: "Hsinchu Recycling Guide", eyebrow: "Use AI search to complete each task",
    title: "Smart Multilingual<br><span>Recycling Challenge</span>", lead: "Find each answer with the Recycling Guide, then complete 5 everyday recycling tasks!",
    questions: "questions", languages: "languages", minute: "minutes", start: "Next: open Recycling Guide",
    helper: "Prepare the LINE search tool before finding the answers", next: "Next question", finish: "View result",
    lineEyebrow: "Step 2 | Prepare your search tool", lineTitle: "Add or open the<br>Hsinchu Recycling Guide",
    lineIntro: "Use the AI search in the Recycling Guide to find the answers to the next 5 questions.",
    lineInstruction1: "Tap the button below to add or open the LINE Official Account", lineInstruction2: "Return to this activity page", lineInstruction3: "Enter the item shown in each task, then choose your answer",
    thresholdNote: "Get at least 4 of 5 correct on your first try. Otherwise, correct only the questions you missed.",
    openOfficialLine: "Open Recycling Guide on LINE", ready: "I'm ready—find the answers", returnTip: "After opening LINE, use your phone's Back function to return here.",
    qrTitle: "Using another device?", qrCopy: "Scan this QR Code with LINE to add the account",
    lookupLabel: "Find the answer first", lookupInstruction: "Type “{term}” in LINE, read the AI reply, then answer.", openLookup: "Open LINE search",
    correctionEyebrow: "One more search", correctionTitle: "Almost there! Correct the missed questions to enter the prize draw.", firstScore: "First attempt",
    correctionCopy: "Use the Hsinchu Recycling Guide to look up the items below. You only need to retry the questions you missed.", startCorrection: "Correct missed questions", retryQuestion: "Search and try again",
    progress: "Question {current} of {total}", score: "{score} pts", correct: "Correct!", wrong: "Good to know",
    completeEyebrow: "Challenge complete", completeTitle: "You completed the Smart Multilingual Recycling Challenge!",
    completeCopy: "Tap the button below to return to LINE, receive your entry, and join the online prize draw.",
    goLine: "Enter the draw on LINE", notice: "Each LINE account may receive one entry only. Prizes are limited and available while supplies last.",
    restart: "Try again", serviceTitle: "Still have a recycling question?",
    serviceCopy: "Type the item in the Recycling Guide. AI will quickly tell you how to sort and dispose of it.",
    sponsor: "Subsidized by Resource Circulation Administration, MOENV", advertiser: "Advertisement by Hsinchu County EPB", back: "Back"
  },
  vi: {
    name: "Tiếng Việt", brand: "Tra cứu tái chế Tân Trúc", eyebrow: "Dùng AI để hoàn thành nhiệm vụ tái chế",
    title: "Thử thách tái chế<br><span>thông minh đa ngôn ngữ</span>", lead: "Tìm đáp án bằng công cụ tra cứu rồi hoàn thành 5 nhiệm vụ tái chế thực tế!",
    questions: "câu hỏi", languages: "ngôn ngữ", minute: "phút", start: "Tiếp theo: mở công cụ tra cứu",
    helper: "Chuẩn bị công cụ tra cứu LINE trước khi tìm đáp án", next: "Câu tiếp theo", finish: "Xem kết quả",
    lineEyebrow: "Bước 2 | Chuẩn bị công cụ tra cứu", lineTitle: "Thêm bạn hoặc mở<br>Tra cứu tái chế Tân Trúc",
    lineIntro: "Hãy dùng chức năng AI trên LINE để tìm đáp án cho 5 câu hỏi tiếp theo.",
    lineInstruction1: "Nhấn nút bên dưới để thêm hoặc mở tài khoản LINE chính thức", lineInstruction2: "Quay lại trang hoạt động này", lineInstruction3: "Nhập vật phẩm theo gợi ý của từng câu rồi chọn đáp án",
    thresholdNote: "Lần đầu cần đúng ít nhất 4/5 câu. Nếu chưa đạt, bạn chỉ cần sửa những câu đã sai.",
    openOfficialLine: "Mở công cụ tra cứu trên LINE", ready: "Tôi đã sẵn sàng—bắt đầu tìm đáp án", returnTip: "Sau khi mở LINE, hãy dùng nút Quay lại trên điện thoại để trở về trang này.",
    qrTitle: "Dùng thiết bị khác?", qrCopy: "Mở LINE và quét mã QR này để thêm bạn",
    lookupLabel: "Trước tiên hãy tìm đáp án", lookupInstruction: "Nhập “{term}” trên LINE, xem trả lời của AI rồi chọn đáp án.", openLookup: "Mở LINE để tra cứu",
    correctionEyebrow: "Tra cứu thêm một lần", correctionTitle: "Chỉ còn một chút nữa! Hãy sửa các câu sai để tham gia rút thăm.", firstScore: "Lần trả lời đầu",
    correctionCopy: "Hãy dùng công cụ tra cứu Tân Trúc để tìm lại các vật phẩm dưới đây. Bạn chỉ cần làm lại những câu đã sai.", startCorrection: "Bắt đầu sửa câu sai", retryQuestion: "Tra cứu và thử lại",
    progress: "Câu {current} / {total}", score: "{score} điểm", correct: "Chính xác!", wrong: "Hãy ghi nhớ nhé",
    completeEyebrow: "Đã hoàn thành", completeTitle: "Bạn đã hoàn thành Thử thách tái chế thông minh đa ngôn ngữ!",
    completeCopy: "Nhấn nút bên dưới để quay lại LINE, nhận lượt và tham gia rút thăm trực tuyến.",
    goLine: "Tham gia rút thăm trên LINE", notice: "Mỗi tài khoản LINE chỉ được nhận 1 lượt. Quà tặng có hạn, chương trình kết thúc khi hết quà.",
    restart: "Thử lại", serviceTitle: "Bạn còn thắc mắc về tái chế?",
    serviceCopy: "Nhập tên vật phẩm vào hệ thống. AI sẽ nhanh chóng hướng dẫn cách phân loại và xử lý.",
    sponsor: "Được Cục Tuần hoàn Tài nguyên, Bộ Môi trường tài trợ", advertiser: "Quảng cáo của Cục Bảo vệ Môi trường Huyện Tân Trúc", back: "Quay lại"
  }
};

const questions = [
  {
    icon: "🍾",
    en: { term: "glass bottle", q: "According to the Recycling Guide, how should waste glass bottles be sorted by color?", a: ["Clear, brown, and green", "Only dark and light", "Mix all colors together"], correct: 0, note: "Rinse glass bottles and separate them into clear, brown, and green before recycling." },
    vi: { term: "chai thủy tinh", q: "Theo hướng dẫn tra cứu, chai thủy tinh phế thải nên được phân loại theo màu như thế nào?", a: ["Trong suốt, nâu và xanh lá", "Chỉ màu đậm và màu nhạt", "Trộn tất cả màu với nhau"], correct: 0, note: "Rửa sạch chai thủy tinh rồi phân riêng thành màu trong suốt, nâu và xanh lá để tái chế." }
  },
  {
    icon: "🔋",
    en: { term: "lithium battery", q: "According to the Recycling Guide, what is the key safety step before recycling a used lithium battery?", a: ["Soak it in water", "Tape over both terminals", "Mix it with general waste"], correct: 1, note: "Cover both terminals with insulating tape, store separately, and recycle promptly to prevent a short circuit." },
    vi: { term: "pin lithium", q: "Theo hướng dẫn tra cứu, bước an toàn quan trọng nhất trước khi tái chế pin lithium là gì?", a: ["Ngâm pin trong nước", "Dán băng keo cách điện lên hai cực", "Trộn với rác thường"], correct: 1, note: "Dán băng keo cách điện lên hai cực, bảo quản riêng và sớm giao cho nơi thu gom để tránh đoản mạch." }
  },
  {
    icon: "🥡",
    en: { term: "paper meal box", q: "According to the Recycling Guide, how should you handle a used paper meal box?", a: ["Remove leftovers, rinse briefly, and recycle it as a paper container", "Recycle it with leftovers inside", "Always put it in general waste"], correct: 0, note: "Remove food residue, give the box a quick rinse, then recycle it as a paper container. Sort leftovers according to local rules." },
    vi: { term: "hộp cơm giấy", q: "Theo hướng dẫn tra cứu, hộp cơm giấy sau khi dùng nên được xử lý như thế nào?", a: ["Bỏ thức ăn thừa, rửa sơ rồi tái chế cùng nhóm bao bì giấy", "Tái chế cùng với thức ăn thừa", "Luôn bỏ vào rác thường"], correct: 0, note: "Loại bỏ thức ăn thừa, rửa sơ hộp rồi giao tái chế cùng nhóm bao bì giấy. Phân loại thức ăn thừa theo quy định địa phương." }
  },
  {
    icon: "🧪",
    en: { term: "pesticide bottle", q: "According to the Recycling Guide, how should an empty pesticide container be prepared for recycling?", a: ["Triple-rinse it and return the rinse water to the spray tank", "Wash it with detergent and pour the water into a drain", "Recycle it unwashed with other items"], correct: 0, note: "Triple-rinse the empty container, return the rinse water to the spray tank for use, and then recycle the container." },
    vi: { term: "chai thuốc bảo vệ thực vật", q: "Theo hướng dẫn tra cứu, chai thuốc bảo vệ thực vật đã dùng hết cần được xử lý thế nào trước khi tái chế?", a: ["Súc rửa 3 lần và đổ nước rửa trở lại bình phun để sử dụng", "Rửa bằng chất tẩy rồi đổ xuống cống", "Không cần rửa, trộn với vật tái chế khác"], correct: 0, note: "Súc rửa chai 3 lần, đổ nước rửa trở lại bình phun để sử dụng rồi mới giao chai đi tái chế." }
  },
  {
    icon: "🧯",
    en: { term: "pressurized container", q: "According to the Recycling Guide, what is the safe way to recycle a pressurized container?", a: ["Empty it, pack it separately, label a warning, and hand it to recycling staff", "Puncture and flatten it, then put it in general waste", "Leave contents inside and mix it with other recyclables"], correct: 0, note: "Make sure it is empty, pack it separately, add a warning label, and hand it to recycling staff. Do not puncture it yourself." },
    vi: { term: "bình chứa áp suất", q: "Theo hướng dẫn tra cứu, quy trình an toàn để tái chế bình chứa áp suất là gì?", a: ["Dùng hết, đóng gói riêng, ghi cảnh báo rồi giao cho nhân viên thu gom", "Tự đục lỗ, ép dẹp rồi bỏ vào rác thường", "Để nguyên chất bên trong và trộn với vật tái chế khác"], correct: 0, note: "Hãy dùng hết, đóng gói riêng, ghi cảnh báo bên ngoài rồi giao cho nhân viên thu gom tái chế. Không tự ý đục lỗ." }
  }
];

const SUPPORTED_LANGUAGES = ["en", "vi"];
const savedLanguage = localStorage.getItem("recycling-language");
let lang = SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : "en";
let languageSelected = false;
let current = 0;
let score = 0;
let answered = false;
let lastAnswerCorrect = false;
let correctionMode = false;
let questionOrder = questions.map((_, index) => index);
let incorrectIndices = [];

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
  lang = SUPPORTED_LANGUAGES.includes(nextLang) ? nextLang : "en";
  localStorage.setItem("recycling-language", lang);
  document.documentElement.lang = lang;
  document.title = lang === "en" ? "Smart Multilingual Recycling Challenge" : "Thử thách tái chế thông minh đa ngôn ngữ";
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
  lastAnswerCorrect = false;
  const questionIndex = questionOrder[current];
  const data = questions[questionIndex][lang];
  $("#stepBadge").textContent = correctionMode ? `REVIEW ${current + 1} / ${questionOrder.length}` : `STEP ${String(current + 3).padStart(2, "0")} / 07`;
  $("#questionVisual").textContent = questions[questionIndex].icon;
  $("#questionNumber").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;
  $("#questionText").textContent = data.q;
  $("#lookupInstruction").textContent = format(copy[lang].lookupInstruction, { term: data.term });
  $("#progressLabel").textContent = format(copy[lang].progress, { current: current + 1, total: questionOrder.length });
  $("#scoreLabel").textContent = format(copy[lang].score, { score });
  $("#progressBar").style.width = `${((current + 1) / questionOrder.length) * 100}%`;
  $(".progress-track").setAttribute("aria-valuemax", String(questionOrder.length));
  $(".progress-track").setAttribute("aria-valuenow", String(current + 1));
  $("#feedback").className = "feedback";
  $("#feedback").innerHTML = "";
  $("#nextButton").disabled = true;
  $("#nextButton").querySelector("span").textContent = current === questionOrder.length - 1 ? copy[lang].finish : copy[lang].next;
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
  const questionIndex = questionOrder[current];
  const data = questions[questionIndex][lang];
  const isCorrect = selected === data.correct;
  lastAnswerCorrect = isCorrect;
  if (isCorrect) score += 1;
  if (!isCorrect && !correctionMode && !incorrectIndices.includes(questionIndex)) incorrectIndices.push(questionIndex);
  $$(".answer-button").forEach((button, index) => {
    button.disabled = true;
    if (index === data.correct) button.classList.add("correct");
    if (index === selected && !isCorrect) button.classList.add("wrong");
  });
  $("#feedback").innerHTML = `<strong>${isCorrect ? copy[lang].correct : copy[lang].wrong}</strong>${data.note}`;
  $("#feedback").classList.add("show");
  $("#scoreLabel").textContent = format(copy[lang].score, { score });
  $("#nextButton").disabled = false;
  if (correctionMode && !isCorrect) $("#nextButton").querySelector("span").textContent = copy[lang].retryQuestion;
}

function startQuiz() {
  current = 0;
  score = 0;
  correctionMode = false;
  incorrectIndices = [];
  questionOrder = questions.map((_, index) => index);
  renderQuestion();
  showScreen("quizScreen");
}

function showLineSetup() {
  $("#stepBadge").textContent = "STEP 02 / 07";
  showScreen("lineScreen");
}

function showCorrectionScreen() {
  $("#stepBadge").textContent = "REVIEW";
  $("#correctionScore").textContent = `${score} / ${questions.length}`;
  $("#wrongItems").innerHTML = incorrectIndices.map((index) => `<span class="wrong-item">${questions[index].icon} ${questions[index][lang].term}</span>`).join("");
  showScreen("correctionScreen");
}

function startCorrection() {
  correctionMode = true;
  questionOrder = [...incorrectIndices];
  current = 0;
  renderQuestion();
  showScreen("quizScreen");
}

function finishQuiz() {
  if (!correctionMode && score < 4) {
    showCorrectionScreen();
    return;
  }
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
$("#correctionButton").addEventListener("click", startCorrection);
function returnToLanguageStep() {
  $("#stepBadge").textContent = "STEP 01 / 07";
  showScreen("welcomeScreen");
}

$("#restartButton").addEventListener("click", returnToLanguageStep);
$("#backButton").addEventListener("click", returnToLanguageStep);
$("#lineBackButton").addEventListener("click", returnToLanguageStep);
$("#nextButton").addEventListener("click", () => {
  if (!answered) return;
  if (correctionMode && !lastAnswerCorrect) {
    renderQuestion();
    return;
  }
  if (current < questionOrder.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

applyLanguage(lang);
