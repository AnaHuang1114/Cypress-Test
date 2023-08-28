# Cypress-Test
## 安裝
於專案路徑下安裝 Cypress
```
npm install cypress --save-dev
```
Node.js 版本：https://docs.cypress.io/guides/getting-started/installing-cypress#Nodejs

## 開啟
1. 開啟 Cypress Launchpad
```
npx cypress open
```
2. 選擇測試類型(E2E Testing)
![](https://hackmd.io/_uploads/SypNRX5T3.png)

3. 選擇 Launching 瀏覽器
![](https://hackmd.io/_uploads/HJvoAm5pn.png)

4. 選擇建立新的 spec
![](https://hackmd.io/_uploads/HJbIyN5ph.png)

5. 將 cypress 資料夾中的 apis, e2e, fixtures, support 複製進專案的 cypress 資料夾中

6. 將 cypress.config.js 與 cypress.env.json 內容更新至專案根目錄下的相對應同名檔案中

8. 於 GUI 中選擇 spec 即會開始 run 該 spec 的 test

#### **cypress.config.js 中的 baseUrl 可以依據測試網址更換

