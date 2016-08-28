export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
  countUp(count) {
    this.dispatcher.dispatch({
      type: 'countUp',
      count
    });
  }
}
