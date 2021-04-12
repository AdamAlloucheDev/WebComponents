export default class MonComposant extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
      <h2>${this.getAttribute('hour')}</h2>
      <p class="description">${this.getAttribute('description')}</p>
      <p class="degrees">${this.getAttribute('degrees')}</p>
    </div>`
  }
}
