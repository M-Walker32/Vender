import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackServices.js";
// manages page interactions

function _drawSnacks() {
  let template = " "
  ProxyState.snacks.forEach(s => template += s.Template)
  document.getElementById('vegetables').innerHTML = template
}

// function total() {
//   document.getElementById('total').innerText = transactionTotal
// }

export class SnackController {
  constructor() {
    // console.log('hello from the controller');
    _drawSnacks()
    // total()
  }
  snackLog() {
    snackService.snackLog()
  }
  addPurchase(price) {
    snackService.addPurchase(price)
  }
}

