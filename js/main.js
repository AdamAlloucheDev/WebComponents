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
  element.setAttribute('hour', item.hour)
  element.setAttribute('description', item.description)
  element.setAttribute('degrees', item.degrees)
  element.setAttribute('class', 'red')

  weatherContainer.appendChild(element)
})
