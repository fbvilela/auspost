import { combineReducers } from 'redux';
import trackedObject from './tracked-object';
import trackingCode from './tracking-code';

export default combineReducers({
  trackedObject,
  trackingCode
});
