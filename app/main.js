import { SnackController } from "./Controllers/SnackController.js";

// This is where the HTML document goes to find the other js documents.
class App {
  // GET RID OF THIS IN THE TEMPLATE
  // valuesController = new ValuesController();
  snackController = new SnackController();

}

window["app"] = new App();
