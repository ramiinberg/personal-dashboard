
// Muista piilottaa client id.. 
fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=fmlNMcq0oHotgRDNfsvEt-Xcynv6wu1h34T7Y5k0_8A')
.then(res => res.json())
.then(data => {
  console.log('data', data)
  document.body.style.backgroundImage = `url(${data.urls.full})`
})

