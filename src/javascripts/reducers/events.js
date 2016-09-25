export default function events(state = [], action) {
  switch (action.type) {
    case 'UPDATE_EVENTS':
      return action.events
    default:
      return state;
  }
}
