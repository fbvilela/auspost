import { combineReducers } from 'redux';
import events from './events';
import trackingCode from './tracking-code';

export default combineReducers({
  events,
  trackingCode
});
