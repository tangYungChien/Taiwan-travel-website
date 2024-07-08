let Allbutton = document.querySelectorAll(".btn-outline-danger");
Allbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    spotID = e.target.id;

    if (e.target.innerText == "+ 加入收藏") {
      e.target.innerHTML = "已收藏!";
      addLike(e, spotID);
      checkElementExistence();
    } else {
      e.target.innerHTML = "+ 加入收藏";
      let likeOne = document.getElementsByClassName(spotID);
      likeOne[0].remove();
      checkElementExistence();
    }
  });
});

let likeDiv = document.querySelector(".likeDiv");
function addLike(e, spotID) {
  let likeOne = document.createElement("div");
  likeOne.classList.add("likeOne");
  likeOne.classList.add(spotID);
  let likeCard = document.createElement("div");
  likeCard.classList.add("likeCard");
  let CardImgDiv = document.createElement("div");
  CardImgDiv.classList.add("CardImgDiv");
  let CardImg = document.createElement("div");
  CardImg.classList.add("CardImg");
  let Img = document.createElement("img");
  let CardImgWord = document.createElement("a");

  let write = document.createElement("textarea");
  write.classList.add("write");
  write.setAttribute("placeholder", "筆記欄...");
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("btnDiv");
  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fa");
  newItag.classList.add("fa-trash");
  newItag.classList.add("fa-2x");
  likeDiv.appendChild(likeOne);
  likeOne.appendChild(likeCard);
  likeOne.appendChild(btnDiv);
  likeCard.appendChild(CardImgDiv);
  likeCard.appendChild(write);
  CardImgDiv.appendChild(CardImg);
  CardImgDiv.appendChild(CardImgWord);
  CardImg.appendChild(Img);
  btnDiv.appendChild(newButton);
  newButton.appendChild(newItag);

  // //收藏景點加入超連結，連結到上面的景點說明
  if (likeOne.classList.contains("PalaceMuseum")) {
    CardImgWord.innerHTML = "國立故宮博物院";
    CardImgWord.setAttribute("href", "#PalaceMuseum");
  } else if (likeOne.classList.contains("Chiang-Kai-shek-Memorial-Hall")) {
    CardImgWord.innerHTML = "國立中正紀念堂";
    CardImgWord.setAttribute("href", "#Chiang-Kai-shek-Memorial-Hall");
  } else if (likeOne.classList.contains("taipei101")) {
    CardImgWord.innerHTML = "臺北101";
    CardImgWord.setAttribute("href", "#taipei101");
  } else if (likeOne.classList.contains("AstronomicalMuseum")) {
    CardImgWord.innerHTML = "臺北市立天文科學教育館";
    CardImgWord.setAttribute("href", "#AstronomicalMuseum");
  } else if (likeOne.classList.contains("ArtsMuseum")) {
    CardImgWord.innerHTML = "臺北市立美術館";
    CardImgWord.setAttribute("href", "#ArtsMuseum");
  } else if (likeOne.classList.contains("ChildrenAmusementPark")) {
    CardImgWord.innerHTML = "臺北市立兒童新樂園";
    CardImgWord.setAttribute("href", "#ChildrenAmusementPark");
  } else if (likeOne.classList.contains("Gaomei")) {
    CardImgWord.innerHTML = "高美濕地";
    CardImgWord.setAttribute("href", "#Gaomei");
  } else if (likeOne.classList.contains("Maple")) {
    CardImgWord.innerHTML = "秋紅谷廣場";
    CardImgWord.setAttribute("href", "#Maple");
  } else if (likeOne.classList.contains("Matsu")) {
    CardImgWord.innerHTML = "大甲鎮瀾宮";
    CardImgWord.setAttribute("href", "#Matsu");
  } else if (likeOne.classList.contains("TaichungTheater")) {
    CardImgWord.innerHTML = "臺中國家歌劇院";
    CardImgWord.setAttribute("href", "#TaichungTheater");
  } else if (likeOne.classList.contains("NaturalScience")) {
    CardImgWord.innerHTML = "國立自然科學博物館";
    CardImgWord.setAttribute("href", "#NaturalScience");
  }
  //監聽a移到螢幕中間
  let allLinks = document.querySelectorAll(".CardImgDiv a");
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); //阻止跳轉到 href 屬性指定的位置
      const targetId = link.getAttribute("href"); //獲取鏈接的 href 屬性值，這是目標元素的 ID
      if (targetId) {
        const targetElement = document.querySelector(targetId); // 根據 ID 查找目標元素
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  //垃圾桶功能
  let allTrash = document.querySelectorAll(".trash-button");
  let button2 = document.getElementById(spotID);

  allTrash.forEach((trash) => {
    trash.addEventListener("click", () => {
      trash.parentElement.parentElement.classList.add("remove"); //移除動畫
      button2.innerHTML = "+ 加入收藏";
    });
  });
  allTrash.forEach((trash) => {
    let form = trash.parentElement.parentElement;
    //等動畫結束才做刪除
    form.addEventListener("transitionend", (e) => {
      e.target.remove();
      checkElementExistence();
    });
  });
}
checkElementExistence();
//無收藏景點開關
function checkElementExistence() {
  let likeOneDiv = document.getElementsByClassName("likeOne")[0]; // 获取第一个具有类名 'likeOne' 的元素
  let noAttractionsMessage = document.getElementById("noAttractionsMessage");
  if (!likeOneDiv) {
    noAttractionsMessage.style.display = "block";
  } else {
    noAttractionsMessage.style.display = "none";
  }
}

// 讓atag在畫面中間
// function aTag() {
//   let allLinks = document.querySelectorAll("CardImgDiv.a");
//   allLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetId = link.getAttribute("href");
//       if (targetId) {
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }
//     });
//   });
// }

fetch(
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-1DDD4E0F-7770-4EF4-9ACE-009BDB05AEA3&StationName=%E8%87%BA%E5%8C%97,%E8%87%BA%E4%B8%AD,%E9%AB%98%E9%9B%84,%E8%8A%B1%E8%93%AE"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let weatherData;
    if (document.querySelector("h1.h1weather").innerText == "台北天氣") {
      weatherData = data.records.Station[3];
    } else if (document.querySelector("h1.h1weather").innerText == "台中天氣") {
      weatherData = data.records.Station[0];
    } else if (document.querySelector("h1.h1weather").innerText == "高雄天氣") {
      weatherData = data.records.Station[1];
    } else {
      weatherData = data.records.Station[2];
    }

    //城市名稱
    let name = weatherData.StationName;
    let tem = weatherData.WeatherElement.AirTemperature;
    let txt = weatherData.WeatherElement.Weather;

    let img;
    if (txt == "晴") {
      img = "images/sun.png";
    } else if (txt == "多雲") {
      img = "images/cloudySun.png";
    } else if (txt == "陰") {
      img = "images/cloudy.png";
    } else {
      img = "images/rainy.png";
    }
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    // 輸出更新日期時間
    console.log(`更新時間: ${currentDate} ${currentTime}`);

    let nowWeather = document.querySelector(".nowWeather");
    nowWeather.innerHTML += `
        <div class = "weather">
            <div class = "weatherIn">
            <p class="txtsmall">更新時間: ${currentDate} ${currentTime}</p>
              <img src="${img}" alt="">
              <p class = "weatherStatus"> 天氣狀態: ${txt}</p>
              <p >目前氣溫: ${tem} °C</p>
            </div>
        </div>
        `;

    weatherStatus = document.querySelector(".weatherStatus");
  });

//天氣處理
fetch(
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-1DDD4E0F-7770-4EF4-9ACE-009BDB05AEA3&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=WeatherDescription&sort=time"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let weatherWeek;
    if (document.querySelector("h1.h1weather").innerText == "台北天氣") {
      weatherWeek = data.records.locations[0].location[1];
    } else if (document.querySelector("h1.h1weather").innerText == "台中天氣") {
      weatherWeek = data.records.locations[0].location[3];
    } else if (document.querySelector("h1.h1weather").innerText == "高雄天氣") {
      weatherWeek = data.records.locations[0].location[0];
    } else {
      weatherWeek = data.records.locations[0].location[2];
    }

    // 創建一個空陣列來存儲選取的資料
    const selectedData = [];

    // 選取每個startTime=06:00:00的資料
    weatherWeek.weatherElement.forEach((element) => {
      element.time.forEach((time) => {
        if (time.startTime.includes("06:00:00")) {
          selectedData.push(time);
        }
      });
    });
    // 遍歷選取的資料，並處理它們
    selectedData.forEach((data) => {
      // 從startTime中提取日期
      const date = new Date(data.startTime.split(" ")[0]);
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); //padStart(2, "0") 方法確保字符串至少有兩個字符，否則補0
      const day = date.getDate().toString().padStart(2, "0");

      // 取得星期幾的簡寫
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayOfWeek = days[date.getDay()]; //返回星期幾，範圍是 0-6
      // 從"value"中擷取天氣狀態
      const weatherStatus = data.elementValue[0].value.split("。")[0];

      // 從"value"中擷取溫度範圍
      const valueParts = data.elementValue[0].value.split("。"); //切成list
      const temperaturePartIndex = valueParts.findIndex((part) =>
        part.includes("溫度攝氏")
      );
      const temperaturePart =
        temperaturePartIndex !== -1 ? valueParts[temperaturePartIndex] : "";
      const temperatureRange = temperaturePart
        ? temperaturePart.split("至")
        : []; //使用 split("至") 將句子按 "至" 分割成兩部分，得到最低溫和最高溫。

      // 分別取得最低溫和最高溫
      const minTemperature =
        temperatureRange.length > 1
          ? temperatureRange[0].replace("溫度攝氏", "")
          : "N/A";
      const maxTemperature =
        temperatureRange.length > 1
          ? temperatureRange[1].replace("度", "")
          : "N/A";

      let img;
      if (weatherStatus == "晴時多雲" || weatherStatus == "晴天") {
        img = "images/sun.png";
      } else if (weatherStatus == "多雲時晴") {
        img = "images/cloudySun.png";
      } else if (
        weatherStatus == "多雲時陰" ||
        weatherStatus == "陰天" ||
        weatherStatus == "多雲"
      ) {
        img = "images/cloudy.png";
      } else {
        img = "images/rainy.png";
      }
      let Week = document.querySelector(".week");
      Week.innerHTML += `
      <div class = "Weekweather">
      <p class="txt" >${month}/${day} ${dayOfWeek}.</p>
      <img src="${img}" alt="">
      <p id="weatherStatus">${weatherStatus} </p>
      <p >${minTemperature} ~${maxTemperature}°C</p>
  </div>
        `;
    });
    setTimeout(() => {
      processWeatherData(
        document.querySelectorAll(".Weekweather"),
        document.querySelector(".weatherStatus")
      );
    }, 100); // 可以根據需要調整延遲時間
  });

// 判斷是否需要顯示雨天景點
function processWeatherData(Weekweather, weatherStatus) {
  let rainForecast = false;
  for (let day of Weekweather) {
    const imgSrc = day.querySelector("img").getAttribute("src");
    if (imgSrc === "images/rainy.png") {
      rainForecast = true;
      break; //若week中有照片是雨天則顯示雨天景點
    }
  }
  const spot = document.querySelector(".spot");
  const txt = weatherStatus.textContent;

  //若week中有照片是雨天或是今日天氣狀態有雨之關鍵字
  if (txt.includes("雨") || rainForecast) {
    spot.style.display = "block";
  } else {
    spot.style.display = "none";
  }
}
