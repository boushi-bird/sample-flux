import EventEmitter from './event-emitter';

export default class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.count = 0;
    dispatcher.on('countUp', this.onCountUp.bind(this));
  }
  getState() {
    return {
      count: this.count
    };
  }
  onCountUp(count) {
    this.count = count;
    this.emit('CHANGE');
  }
}
