import Bubble from "./components/Bubble.js";
import BeerList from "./constants/BeerList.js";
import { $ } from "./Utils.js";

class App {
  #result = null;
  constructor() {
    this.init();
  }
  init() {
    const urlParams = new URL(location.href).searchParams;
    const name = urlParams.get("id");
    this.#result = BeerList.find(({ id }) => id === name);
    if (!this.#result) {
    }
    this.addBubbles(50);
    this.changeBeerData();
    this.addEvent();
  }
  addBubbles(amount) {
    for (let i = 0; i < amount; i++) {
      new Bubble($(".bubbles"), "span", null, "bubble");
    }
  }
  changeBeerData() {
    this.changeBeerName();
    this.changeBeerDesc();
    this.changeFoodList();
    this.changeColor();
    this.changeStatus();
  }
  changeBeerName() {
    $(".beer-name-kor").innerHTML = this.#result.name;
    $(".beer-name-eng").innerHTML = this.#result.nameEng;
  }
  changeBeerDesc() {
    $(".beer-desc").innerHTML = this.#result.desc;
  }
  changeFoodList() {
    $(".food-list").innerHTML = `
      ${this.#result.foods.map((food) => `<li>${food}</li>`).join("")}
    `;
  }
  changeStatus() {
    $(".ibu .status-desc").innerHTML = this.#result.ibu;
    $(".alc .status-desc").innerHTML = this.#result.alc;
    $(".malty .status-bar-inner").style.width = this.#result.malty + "%";
    $(".hoppy .status-bar-inner").style.width = this.#result.hoppy + "%";
  }
  changeColor() {
    $("body").style.backgroundColor = this.#result.color;
    $(".beer-graphic").style.backgroundColor = this.#result.color;
  }
  addEvent() {
    $(".other-result").addEventListener("click", () => {
      location.href = `https://cobocho.github.io/MBeerTI/result?id=${this.#result.other}`;
    });
    $(".retry").addEventListener("click", () => {
      location.href = "/MBeerTI";
    });
  }
}

const app = new App();
