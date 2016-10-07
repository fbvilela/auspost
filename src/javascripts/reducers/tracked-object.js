export default function trackedObject(state = {
  status: 'Enter tracking code',
  events: []
}, action) {
  switch (action.type) {
    case 'UPDATE_EVENTS':
      return action.trackedObject
    default:
      return state;
  }
}
