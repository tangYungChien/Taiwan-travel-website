# 台灣旅遊網 
(https://taiwan-travel-tang.vercel.app/)

台灣旅遊網是一個展示台灣各地熱門旅遊景點的網站。該網站提供了精選景點介紹、天氣資訊以及收藏功能，旨在為使用者提供一個便捷的旅遊資訊平台。

## 功能描述

- **首頁**
    - 介紹台灣相關主題及google map地圖位置
    - 進入各城市旅遊主題
- **精選景點**
    - 展示該城市多個熱門景點，每個景點包含圖片、描述和“加入收藏”按鈕。
    - 提供各景點相關外部連結。
- **收藏功能**
    - 允許使用者收藏他們喜愛的景點。
- **天氣資訊**
    - 提供當地天氣資訊，包括當前天氣和未來一週預報。
    - 如果當天或未來一週有雨，顯示雨天推薦景點。

## 技術棧

- **HTML**
- **CSS**
- **JavaScript**

## HTML

- 使用`<section>`、`<nav>`、`<header>`、`<footer>`等**語義化標籤**來提升可讀性。

## CSS

- 使用SCSS巢狀語法更具結構性
- 使用**Box Model**來控制元素的空間和邊框
- 使用Z-Index來堆疊環境
- 使用`display: flex`來創建彈性容器
- 使用`position: absolute`和`position: relative`來實現元素的精確定位
- 使用`transition`來實現平滑過渡效果
- 使用&:hover**偽類**（Pseudo-classes）來設置滑鼠懸停效果
- RWD響應式設計電腦與手機版

## **JavaScript**

- `document.querySelector` 和 `document.querySelectorAll`選取DOM元素。
- `forEach` 方法用於遍歷`NodeList`或`Array`，並對每個元素執行一個指定的函數。
- `addEventListener` 用於向DOM元素添加事件監聽器，在特定事件（如`click`）觸發時執行指定的回調函數。
- 使用 `createElement`, `classList.add`, `appendChild` 等方法動態創建和修改DOM元素。
- 條件語句 `if-else`，根據不同條件執行不同的代碼塊。
- `fetch` API 發送HTTP請求，`fetch` 返回一個 `Promise` ， `then`方法用於處理 `Promise` 的成功結果。
- 使用`setTimeout`來延遲執行某些操作，以確保數據處理完成。
- 通過`setInterval()`函數每2.5秒切換一次背景圖片
- `scrollIntoView()`平滑滾動到目標元素

## 外部資源

- **Bootstrap**
    - 使用Bootstrap來快速設計nav與card。
- **Font Awesome**
    - 引入Font Awesome庫來使用圖示。
- **第三方API**
    - Google Maps API -顯示台灣的地理位置
    - 中央氣象署API-現在天氣觀測報告 & 一週天氣預報
    


