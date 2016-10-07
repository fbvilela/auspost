import trackAuspostParcel from '../modules/auspost'

export function updateEvents(events) {
  return {
    type: 'UPDATE_EVENTS',
    events
  }
}


export function getEvents(trackingCode) {
  return (dispatch) => {
    trackAuspostParcel().then(json => {
      console.log('json', json)
      dispatch(updateEvents([1,2,3]))
    }).catch( error => {
      console.log('shit happened', error)
    })
  }
}
