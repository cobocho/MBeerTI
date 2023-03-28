import LandingController from "./LandingController.js";
import LoadingContoller from "./LoadingContoller.js";
import TestController from "./TestController.js";
import { $ } from "./Utils.js";

class App {
  constructor() {
    this.landingController = new LandingController();
    this.testController = new TestController();
    this.loadingContoller = new LoadingContoller();
    this.result = null;
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
  turnToResultPage(userInput) {
    this.result = userInput;
    this.testController.removeTestPage();
    setTimeout(() => {
      this.loadingContoller.setLoading();
    }, 1500);
    setTimeout(() => {
      this.loadingContoller.redirect(this.result);
    }, 6000);
  }
}

const app = new App();

export default app;
