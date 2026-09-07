# 多語智慧回收挑戰

「竹縣回收凍好查」中、英、越文線上互動活動。完成三道回收情境題後，導引民眾前往 LINE 官方帳號參加抽獎。

## 上線前必改

開啟 `dist/app.js`，把最上方的：

```js
lineLotteryUrl: "https://line.me/",
```

替換成 OA Plus 提供的正式抽獎活動網址。

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

- 三語介面文字：`dist/app.js` 的 `copy`
- 三語題目與解析：`dist/app.js` 的 `questions`
- 合作單位名稱與代碼：`dist/app.js` 的 `sources`

本網站為純靜態網頁，不蒐集姓名、電話或 LINE 個資；作答分數只存在當次瀏覽頁面中。
