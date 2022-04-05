export class Snack {
  constructor(name, image, price) {
    this.name = name
    this.image = image
    this.price = price
  }

  get Template() {
    return `<div class="col-3 text-align-center vending-item p-4 justify-content-center">
<h3>${this.name}</h3>
<img src="${this.image}">
<h6>Price: $${this.price} </h6>
</div>`}
}