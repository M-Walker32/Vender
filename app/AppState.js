import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  transactionTotal = 0
  /** @type {import('./Models/Value').Value[]} */
  snacks = [
    new Snack('radish', 'assets/img/radish.jpg', 1.00),
    new Snack('carrot', 'assets/img/carrot.jpg', 2.00),
    new Snack('onion', 'assets/img/onion.jpg', 3.00),
    new Snack('zucchini', 'assets/img/zucchini.jpg', 1.00)
  ]
}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


