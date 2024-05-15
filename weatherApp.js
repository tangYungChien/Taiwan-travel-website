fetch(
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-1DDD4E0F-7770-4EF4-9ACE-009BDB05AEA3&StationName=%E8%87%BA%E5%8C%97,%E8%87%BA%E4%B8%AD,%E9%AB%98%E9%9B%84,%E8%8A%B1%E8%93%AE"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let weatherData;
    document.querySelectorAll(".weatherDiv").forEach((weatherDiv) => {
      let h1weather = weatherDiv.querySelector(".h1weather");
      if (h1weather.innerText == "台北天氣") {
        weatherData = data.records.Station[3];
      } else if (h1weather.innerText == "台中天氣") {
        weatherData = data.records.Station[0];
      } else if (h1weather.innerText == "高雄天氣") {
        weatherData = data.records.Station[1];
      } else if (h1weather.innerText == "花蓮天氣") {
        weatherData = data.records.Station[2];
      }
      let name = weatherData.StationName;
      let tem = weatherData.WeatherElement.AirTemperature;
      let txt = weatherData.WeatherElement.Weather;
      let img;
      if (txt == "晴") {
        img = "images/sun.png";
      } else if (txt == "晴時多雲") {
        img = "images/cloudySun.png";
      } else if (txt == "陰" || txt == "多雲") {
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

      let nowWeather = weatherDiv.querySelector(".nowWeather");

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
    });
  });

fetch(
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-1DDD4E0F-7770-4EF4-9ACE-009BDB05AEA3&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=WeatherDescription&sort=time"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let weatherWeek;
    console.log(data);
    document.querySelectorAll(".weatherDiv").forEach((weatherDiv) => {
      let h1weather = weatherDiv.querySelector(".h1weather");
      if (h1weather.innerText == "台北天氣") {
        weatherWeek = data.records.locations[0].location[1];
      } else if (h1weather.innerText == "台中天氣") {
        weatherWeek = data.records.locations[0].location[3];
      } else if (h1weather.innerText == "高雄天氣") {
        weatherWeek = data.records.locations[0].location[0];
      } else if (h1weather.innerText == "花蓮天氣") {
        weatherWeek = data.records.locations[0].location[2];
      }

      // 創建一個空陣列來存儲我們選取的資料
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
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");

        // 取得星期幾的簡寫
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayOfWeek = days[date.getDay()];
        // 從"value"中擷取天氣狀態
        const weatherStatus = data.elementValue[0].value.split("。")[0];

        // 從"value"中擷取降雨機率，如果沒有則設為0%
        const rainfallProbability = data.elementValue[0].value.includes(
          "降雨機率"
        )
          ? data.elementValue[0].value.split("。")[1]
          : "降雨機率 0%";

        // 從"value"中擷取溫度範圍
        const valueParts = data.elementValue[0].value.split("。");
        const temperaturePartIndex = valueParts.findIndex((part) =>
          part.includes("溫度攝氏")
        );
        const temperaturePart =
          temperaturePartIndex !== -1 ? valueParts[temperaturePartIndex] : "";
        const temperatureRange = temperaturePart
          ? temperaturePart.split("至")
          : [];

        // 分別取得最低溫和最高溫
        const minTemperature =
          temperatureRange.length > 1
            ? temperatureRange[0].replace("溫度攝氏", "")
            : "N/A";
        const maxTemperature =
          temperatureRange.length > 1
            ? temperatureRange[1].replace("度", "")
            : "N/A";
        console.log(weatherStatus);

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
        let Week = weatherDiv.querySelector(".week");
        Week.innerHTML += `
          <div class = "Weekweather">

              <p class="txt" >${month}/${day} ${dayOfWeek}.</p>
              <img src="${img}" alt="">
              <p >${weatherStatus} </p>
              <p >${minTemperature} ~${maxTemperature}°C</p>
              

          </div>
          `;
      });
    });
  });
