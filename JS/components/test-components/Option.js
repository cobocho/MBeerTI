import Component from "../../cores/Component.js";

export default class Option extends Component {
  constructor(target, element, state, className, id) {
    super(target, element, state, className);
    if (id) this.$element.id = id;
    this.setOption(this.state);
  }
  setOption(question) {
    this.$element.innerHTML = `<p>${question}</p>`;
  }
}
