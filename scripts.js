document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
  
    if (city === "") {
      alert("Сураныч, шаар тандаңыз.");
      return;
    }
  
    const apiKey = "f81ee30019958444d16b0940630b6841"; // вставь сюда свой ключ
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kg`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Шаар табылган жок.");
        }
        return response.json();
      })
      .then((data) => {
        // Обновляем значения в интерфейсе
        document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("wind").textContent = `${Math.round(data.wind.speed)} км/с`;
        document.getElementById("pressure").textContent = `${Math.round(data.main.pressure)} мм.сын.баа`;
        
  
        // Заголовок обновим на город
        document.querySelector("#weatherInfo h4").textContent = `Аба ырайы: ${data.name}`;
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  