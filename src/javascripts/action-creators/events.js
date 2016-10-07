import trackAuspostParcel from '../modules/auspost'

export function updateEvents(trackedObject) {
  return {
    type: 'UPDATE_EVENTS',
    trackedObject
  }
}

export function getEvents(trackingCode) {
  return (dispatch) => {
    trackAuspostParcel(trackingCode).then(trackedObject => {
      dispatch(updateEvents(trackedObject))
    }).catch( error => {
      dispatch(updateEvents({
        status: 'parcel not found',
        events: []
      }))
      console.log('shit happened', error)
    })
  }
}
