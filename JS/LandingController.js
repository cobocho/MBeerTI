import Bubble from "./components/Bubble.js";
import $ from "./Utils.js";

export default class LandingController {
  constructor() {
    this.addBubbles(70);
    this.setStartButtonEvent();
  }
  addBubbles(amount) {
    const $inner = $(".inner");
    for (let i = 0; i < amount; i++) {
      new Bubble($inner, "span");
    }
  }
  setStartButtonEvent() {
    const $startBtn = $(".start-btn");
    $startBtn.addEventListener("click", () => {
      console.log("start");
    });
  }
}
