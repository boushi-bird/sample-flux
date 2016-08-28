import {Dispatcher} from 'flux';

export default class Store extends Dispatcher {
  constructor(dispatcher) {
    super();
    this.count = 0;
    dispatcher.register(payload => {
      if (payload.type !== 'countUp') {
        return;
      }
      this.onCountUp(payload.count);
    });
  }
  getState() {
    return {
      count: this.count
    };
  }
  onCountUp(count) {
    this.count = count;
    this.dispatch({
      type: 'CHANGE'
    });
  }
}
