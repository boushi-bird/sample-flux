import {Dispatcher} from 'flux';
import Store from './store';
import ActionCreator from './action-creator';

const dispatcher = new Dispatcher();
const action = new ActionCreator(dispatcher);
const store = new Store(dispatcher);

export default class Component {
  constructor() {
    this.state = store.getState();
    store.register(payload => {
      if (payload.type !== 'CHANGE') {
        return;
      }
      this._onChange();
    });
  }
  _onChange() {
    this.setState(store.getState());
  }
  tick() {
    action.countUp(this.state.count + 1);
  }
  render() {
    // 生でやるのでテキトー
    window.__countup = () => {
      this.tick();
    };
    return `
    <button onclick="__countup()">Count Up</button>
    <p>Count: ${this.state.count}</p>
    `;
  }
  // React.Componentの代わりに実装
  setState(state) {
    this.state = state;
    this._render();
  }
  onRender(handler) {
    this._renderHandler = handler;
    this._render();
  }
  _render() {
    if (this._renderHandler) {
      this._renderHandler(this.render());
    }
  }
}
