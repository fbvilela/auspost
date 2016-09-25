export default function trackingCode(state = 'whatever', action) {
  switch (action.type) {
    case 'SET_TRACKING_CODE':
      return action.trackingCode
    default:
      return state;
  }
}
