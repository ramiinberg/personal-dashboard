
const imageCreatorEl = document.getElementById('image-creator')

// Muista piilottaa client id.. 
fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=fmlNMcq0oHotgRDNfsvEt-Xcynv6wu1h34T7Y5k0_8A')
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

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  .then(res => {
    if (!res.ok) {
      throw Error("Something went wrong")
    }
    return res.json()
  })
  .then(data => {
    const { image, name } = data
    document.getElementById("img-doge").src = image.small
    document.getElementById("name-doge").textContent = name
    console.log('data', data)
  })
  .catch(error => console.error(error))

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
  .then(res => res.json())
  .then(data => {
    console.log('data', data)
  })

fetch('https://api.coingecko.com/api/v3/coins/ethereum')
  .then(res => res.json())
  .then(data => {
    console.log('data', data)
  })

fetch('https://api.coingecko.com/api/v3/coins/cosmos')
  .then(res => res.json())
  .then(data => {
    console.log('data', data)
  })

