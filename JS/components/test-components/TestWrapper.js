import Component from "../../cores/Component.js";
import Options from "./Options.js";
import Question from "./Question.js";

export default class TestWrapper extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
  }
  mount() {
    new Question(this.$element, "p", this.state.question, "question");
    new Options(this.$element, "div", this.state, "options");
  }
}
