class MonComposant extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
      <h2>10H00</h2>
      <p class="description">Ensoleillé</p>
      <p class="degrees">10 °C</p>
    </div>`
  }
}

customElements.define('mon-composant', MonComposant)
