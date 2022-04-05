import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackServices.js";
// manages page interactions
function _drawSnacks() {
  let template = " "
  ProxyState.snacks.forEach(s => template += s.Template)
  document.getElementById('vegetables').innerHTML = template
}

export class SnackController {
  constructor() {
    // console.log('hello from the controller');
    _drawSnacks()
  }
  snackLog() {
    snackService.snackLog()
  }
}

