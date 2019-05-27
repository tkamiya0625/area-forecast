const overlay = document.getElementById('overlay')
const description = document.getElementById('description')

const map = new mapboxgl.Map({
  container: 'map',
  maxZoom: 22,
  style: 'style.json',
  attributionControl: true,
  hash: true,
  renderWorldCopies: false
})

map.on('mousemove', (e) => {
  const fs = map.queryRenderedFeatures(e.point)
  fs.sort((a, b) => {
    return parseInt(a.properties.code) - parseInt(b.properties.code)
  })
  if (fs.length > 0) {
    overlay.classList.remove('off')
    overlay.classList.add('on')
    let s = ''
    for(let f of fs) {
      s += `${f.properties.code}: ${f.properties.name}<br/>`
    }
    description.innerHTML = s 
  } else {
    overlay.classList.remove('on')
    overlay.classList.add('off')
    description.innerHTML = ''
  }
})
