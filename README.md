# 多語智慧回收挑戰

「竹縣回收凍好查」中、英、越文線上互動活動。使用者先選擇語言，接著加入或開啟LINE官方帳號，再使用AI智慧查詢尋找五道題目的答案，最後導引至抽獎活動。

## 上線前必改

開啟 `app-v5.js`，把最上方的：

```js
lineLotteryUrl: "https://line.me/",
```

替換成 OA Plus 提供的正式抽獎活動網址。

LINE官方帳號按鈕已設定為環保局公開連結 `https://lin.ee/lOAwxR9`；如日後變更，可修改 `lineOfficialUrl`。`line-qr.jpg`則為電腦或其他裝置使用者提供的掃描方式。

## GitHub Pages 部署

1. 將 `dist` 內的 `index.html`、`styles.css`、`app.js` 放在 GitHub repository 根目錄。
2. 到 repository 的 **Settings → Pages**。
3. Source 選擇 **Deploy from a branch**，再選 `main` 與 `/ (root)`。
4. 儲存後等待 GitHub 產生活動網址。

## 三處合作單位專屬網址

假設活動網址為 `https://example.github.io/recycling/`，可分別將下列網址製作成 QR Code：

- 新竹縣政府高齡長照處：`https://example.github.io/recycling/?source=longterm`
- 新竹縣移工諮詢服務中心：`https://example.github.io/recycling/?source=migrant`
- 勞動部竹北就業中心：`https://example.github.io/recycling/?source=jobcenter`

頁尾會依網址自動顯示合作單位名稱；前往 LINE 時也會保留 `source` 參數。是否能在 OA Plus 端統計此參數，需再向服務窗口確認。

## 修改文字或題目

- 三語介面文字：`app-v5.js` 的 `copy`
- 三語題目與解析：`app-v5.js` 的 `questions`
- 合作單位名稱與代碼：`app-v5.js` 的 `sources`

本網站為純靜態網頁，不蒐集姓名、電話或 LINE 個資；作答分數只存在當次瀏覽頁面中。
