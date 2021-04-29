import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.template = '';
    this.render(this.data);
  }
  render() {
    if (!this.elem) {
      this.elem = document.createElement('DIV');
      this.elem.className = 'card';
    }
    this.template += `
      <div class="card__top">
        <img src="/assets/images/products/${this.data.image}" class="card__image" alt="product">
        <span class="card__price">€${this.data.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.data.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `
    this.elem.addEventListener('click', this.onClick.bind(this));
    this.elem.insertAdjacentHTML('beforeEnd', this.template);
    return this.elem;
  }
  onClick(ev) {
    if (!ev.target.tagName === 'button') return;
    const event = new CustomEvent('product-add', {
      detail: this.data.id,
      bubbles: true
    });
    this.elem.dispatchEvent(event);
  }
}
