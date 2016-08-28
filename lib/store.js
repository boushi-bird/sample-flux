import {ReduceStore} from 'flux/utils';

export default class Store extends ReduceStore {
  getInitialState() {
    return {
      count: 0
    };
  }
  reduce(state, action) {
    switch (action.type) {
      case 'countUp':
        return {
          count: action.count
        };
      default:
        return null;
    }
  }
}
