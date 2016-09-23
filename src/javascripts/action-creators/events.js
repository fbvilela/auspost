export function updateEvents(events) {
  return {
    type: 'UPDATE_EVENTS',
    events
  }
}


export function getEvents(trackingCode) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(updateEvents([1,2,3]))
    }, 1000)

  }
}
