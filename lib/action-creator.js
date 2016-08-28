export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
  countUp(count) {
    this.dispatcher.emit('countUp', count);
  }
}
