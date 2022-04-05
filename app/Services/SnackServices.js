import { ProxyState } from "../AppState.js"
import { Snack } from "../Models/Snack.js";
//  manipulates the data
class SnackService {
  snackLog() {
    console.log('this is the snack service it dosesnt do anything');
  }
}

export const snackService = new SnackService()