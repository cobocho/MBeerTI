import LandingController from "./LandingController.js";
import ResultController from "./ResultContoller.js";
import TestController from "./TestController.js";
import { $ } from "./Utils.js";

class App {
  constructor() {
    this.landingController = new LandingController();
    this.testController = new TestController();
    this.resultController = new ResultController();
    this.init();
  }
  init() {
    const $startBtn = $(".start-btn");
    $startBtn.addEventListener(
      "click",
      () => {
        this.turnToTestPage();
      },
      { once: true }
    );
    this.landingController.addBubbles(70);
  }
  turnToTestPage() {
    this.landingController.removeLandingPage();
    this.testController.setFirstTest();
  }
  turnToResultPage(result) {
    this.testController.removeTestPage();
    setTimeout(() => {
      this.resultController.setLoading();
    }, 1500);
    setTimeout(() => {
      this.resultController.redirect(result);
    }, 6000);
  }
}

const app = new App();

export default app;
