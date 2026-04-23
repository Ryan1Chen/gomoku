# ♟ 五子棋 PWA

一個用純 HTML / CSS / JavaScript 寫成的五子棋遊戲，支援 PWA（漸進式網頁應用程式）。
可以加入 iPhone / iPad 主畫面，像原生 App 一樣全螢幕執行，完全免費、無需上架。

---

## 🎮 功能特色

| 功能 | 說明 |
|------|------|
| 👥 雙人對戰 | 兩人輪流在同一台裝置下棋 |
| 🤖 人機對戰 | 內建 AI，會進攻也會防守 |
| 💡 建議下一步 | 分析當前局面，指出最佳落點並說明原因 |
| 📖 教學系統 | 12 堂課，涵蓋基礎、攻擊棋形、防守策略、開局棋陣 |
| ↩ 悔棋 | 可反悔上一手（人機模式同時撤回 AI 的棋） |
| 🏆 計分板 | 自動累計每局勝負 |
| 📲 離線遊玩 | 透過 Service Worker 快取，沒有網路也能玩 |

---

## 📁 檔案結構

```
gomoku/
├── index.html      ← 遊戲主體（所有功能都在這一個檔案裡）
├── manifest.json   ← PWA 設定（App 名稱、圖示、顯示方式）
├── sw.js           ← Service Worker（讓遊戲可以離線執行）
└── README.md       ← 這份說明文件
```

---

## 🚀 部署到 GitHub Pages（一步一步教學）

### 第一步：建立 GitHub 帳號

1. 用瀏覽器開啟 [https://github.com](https://github.com)
2. 點右上角「**Sign up**」
3. 輸入 Email、密碼、帳號名稱，完成註冊
4. 記住你的帳號名稱，之後網址會用到

---

### 第二步：建立新的 Repository（存放空間）

1. 登入後，點右上角的「**+**」→「**New repository**」
2. 填寫以下資訊：

   | 欄位 | 填寫內容 |
   |------|---------|
   | Repository name | `gomoku`（或任何你喜歡的名字） |
   | Description | 五子棋 PWA 遊戲（可以不填） |
   | Public / Private | 選 **Public**（GitHub Pages 免費版需要公開） |
   | Add a README file | **不要勾選**（我們自己上傳） |

3. 點「**Create repository**」

---

### 第三步：上傳遊戲檔案

1. 進入剛建立的 Repository 頁面
2. 點「**uploading an existing file**」（或拖曳區域）

   > 如果看不到這個連結，點頁面上的「**Add file**」→「**Upload files**」

3. 把這 4 個檔案全部**拖曳進去**：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `README.md`

4. 最下面 Commit 區塊填寫：
   - 第一行（標題）：`初始上傳五子棋遊戲`
   - 選「**Commit directly to the main branch**」

5. 點「**Commit changes**」

---

### 第四步：開啟 GitHub Pages

1. 在 Repository 頁面，點上方選單的「**Settings**」
2. 左側選單找到「**Pages**」
3. 在「**Branch**」下拉選單選「**main**」，資料夾選「**/ (root)**」
4. 點「**Save**」
5. 等待約 **1～3 分鐘**後重新整理頁面
6. 頁面上會出現你的網址：

   ```
   https://你的帳號名稱.github.io/gomoku/
   ```

   > 例如帳號是 `ryanclaw`，網址就是 `https://ryanclaw.github.io/gomoku/`

---

### 第五步：在 iPhone / iPad 加入主畫面

1. 用 **Safari** 開啟上面的網址（必須是 Safari，Chrome 不支援 PWA 加入主畫面）
2. 點下方工具列的「**分享**」按鈕（方框加箭頭的圖示 ⬆）
3. 在選單中找到「**加入主畫面**」
4. 名稱可以改成「五子棋」，點「**新增**」
5. 回到主畫面，就可以看到五子棋的圖示，點開即可全螢幕遊玩！

---

## 🔧 之後如何更新遊戲

如果你之後修改了遊戲內容，要重新上傳：

1. 進入 Repository 頁面
2. 點要更新的檔案（例如 `index.html`）
3. 點右上角的「**鉛筆圖示（Edit）**」或直接點「**Add file → Upload files**」重新上傳
4. Commit 後 GitHub Pages 會**自動更新**，約等 1～2 分鐘即生效

---

## 📱 PWA 是什麼？

PWA（Progressive Web App，漸進式網頁應用程式）是一種特殊的網頁，它可以：

- 📲 **加入主畫面**：像 App 一樣有圖示，點開全螢幕執行
- ✈️ **離線執行**：第一次開啟後，之後沒有網路也能玩
- 🔄 **自動更新**：你更新網頁內容，下次開啟就是新版本
- 💰 **完全免費**：不需要 Apple Developer 帳號，不需要上架

與原生 App 的差別：

| 比較項目 | PWA | 原生 App |
|---------|-----|---------|
| 開發費用 | 免費 | 需要 Apple 開發者帳號（$99/年） |
| 上架審核 | 不需要 | 需要 Apple 審核 |
| 安裝方式 | Safari 加入主畫面 | App Store 下載 |
| 離線功能 | ✅ 支援 | ✅ 支援 |
| 使用相機/藍牙 | ❌ 受限 | ✅ 完整支援 |
| 適合場景 | 遊戲、工具、個人使用 | 複雜功能的商業 App |

---

## ❓ 常見問題

**Q：加入主畫面後，圖示只有預設圖，沒有自訂圖示？**

A：因為 `manifest.json` 中的圖示檔案（`icon-192.png`、`icon-512.png`）還沒有放進去。你可以：
1. 準備一張 512×512 像素的 PNG 圖片
2. 改名為 `icon-512.png`，再縮小一份存成 `icon-192.png`
3. 和其他檔案一起上傳到 GitHub Repository

**Q：開啟網址後顯示 404 錯誤？**

A：GitHub Pages 需要等 1～3 分鐘才會生效，請稍候後重新整理頁面。
也請確認 Settings → Pages 中有正確設定 Branch 為 `main`。

**Q：在 iPhone 上無法全螢幕？**

A：必須用 **Safari** 瀏覽器開啟網址，然後「加入主畫面」。
Chrome 或其他瀏覽器不支援 iOS 的 PWA 全螢幕功能。

**Q：更新遊戲後 iPad 上還是舊版本？**

A：因為 Service Worker 會快取舊版。解決方法：
1. 在 iPad 的設定 → Safari → 清除快取與網站資料
2. 重新開啟 Safari 進入遊戲網址
3. 再次「加入主畫面」更新

---

## 🛠️ 技術說明

本專案使用純前端技術，**不需要伺服器、不需要資料庫**：

- **HTML5 Canvas**：繪製棋盤與棋子
- **Vanilla JavaScript**：遊戲邏輯、AI、教學系統
- **CSS3**：動畫、漸層、響應式排版
- **Web App Manifest**：PWA 設定
- **Service Worker**：離線快取

瀏覽器支援：iOS Safari 11.3+、Android Chrome 40+、桌面版 Chrome / Firefox / Edge

---

## 📄 授權

本專案為個人使用專案，歡迎自由修改。
