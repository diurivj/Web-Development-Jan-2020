mapboxgl.accessToken =
  'pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
})

const geoCoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  countries: 'mx'
})

map.addControl(geoCoder)

map.on('moveend', r => {
  const { lng, lat } = map.getCenter()
  if (lng !== 0 || lat !== 0) {
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
    const address = document.querySelector('input[placeholder="Search"]').value
    const addressInput = document.querySelector('input[name="address"]')
    const latInput = document.querySelector('input[name="latitude"]')
    const lngInput = document.querySelector('input[name="longitude"]')
    latInput.value = lat
    lngInput.value = lng
    addressInput.value = address
  }
})
