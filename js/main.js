import MonComposant from './mon-composant.js'

customElements.define('mon-composant', MonComposant)

const weatherContainer = document.querySelector('.flex')

const weather = [
  {
    hour: '10h00',
    description: 'Ensoleillé',
    degrees: '10 °C',
  },
  {
    hour: '10h00',
    description: 'Nuageux',
    degrees: '8 °C',
  },
  {
    hour: '10h00',
    description: 'Orage',
    degrees: '5 °C',
  },
]

weather.forEach((item) => {
  const element = document.createElement('mon-composant')
  element.hour = item.hour
  element.description = item.description
  element.degrees = item.degrees

  weatherContainer.appendChild(element)
})
