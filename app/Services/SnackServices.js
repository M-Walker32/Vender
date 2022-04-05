import { ProxyState } from "../AppState.js"
import { Snack } from "../Models/Snack.js";
//  manipulates the data
let transactionTotal = 0
let total = 0
class SnackService {
  snackLog() {
    transactionTotal += 2
    console.log(transactionTotal)
  }
  addPurchase(price) {
    let num = parseInt(price)
    total += num
    document.getElementById('total').innerText = total
    // the name is passed with the function
    // make the fucntion add the price to the total
  }
}

export const snackService = new SnackService()