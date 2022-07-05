
const imageCreatorEl = document.getElementById('image-creator')

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(res => res.json())
.then(data => {
  const { urls, user } = data
  document.body.style.backgroundImage = `url(${urls.full})`
  imageCreatorEl.textContent = `By: ${user.name}`
})
.catch(() => {
  document.body.style.backgroundImage = `url(
    https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDMzNzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTY5MzA5NzI&ixlib=rb-1.2.1&q=80
    )`
  imageCreatorEl.textContent = 'By: Vadim Sherbakov'
})

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
  .then(res => {
    if (!res.ok) {
      throw Error("Something went wrong")
    }
    return res.json()
  })
  .then(data => {
    const { image, name, market_data } = data
    document.getElementById("img-doge").src = image.small
    document.getElementById("name-doge").textContent = name
    document.getElementById("current-price").textContent = `${market_data.current_price.eur} €`
    const priceChange = market_data.price_change_percentage_30d_in_currency.eur.toFixed(2)
    const comparePriceEl = document.getElementById("compare-price")
    comparePriceEl.innerHTML = `${priceChange >= 0 ? "<i class='fa-solid fa-arrow-up'></i>" : "<i class='fa-solid fa-arrow-down'></i>"} ${priceChange} % <span style="color: white;">(30 days)</span>`

    comparePriceEl.classList.add(priceChange >= 0 ? "color-green" : "color-red")
  })
  .catch(error => console.error(error))

setInterval(currentTime, 1000);

const currentTimeEl = document.getElementById('time')

function currentTime() {
  const current = new Date().toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' })
  currentTimeEl.textContent = current
}


if('geolocation' in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords 
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`)
      .then(res => {
        if (!res.ok) {
          throw Error("Something went wrong in the weather fetch")
        }
        return res.json()
      })
      .then(data => {
        const { weather, name, main } = data
        const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        document.getElementById("weather-icon-and-temp").innerHTML = `
          <img src=${weatherIcon}>
          <p>${Math.round(main.temp)} °C</p>
        `

        document.getElementById("weather-city").innerHTML = `
         <p>${name}</p>
        `
      })
      .catch(error => console.error(error))
  });
} else {
  /* geolocation IS NOT available */
}




