import Component from "../../cores/Component.js";
import LoadingImage from "./LoadingImage.js";

export default class LoadingDesc extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
  }
  mount() {
    this.$element.textContent = this.state;
  }
}
