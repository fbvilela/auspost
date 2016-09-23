import React from 'react';
import { connect } from 'react-redux';

import { setTrackingCode } from '../action-creators/tracking-code'
import { getEvents } from '../action-creators/events'

export const TrackingFormView = ( { trackingCode, setTrackingCode, getEvents, dispatch } ) => {
  const handleInputChanged = (event) => { setTrackingCode(event.target.value) }

  return (
    <div className="input-group">
     <input type="text" className="form-control" placeholder="tracking code..." value={trackingCode} onChange={handleInputChanged} />
     <span className="input-group-btn">
       <button
        className="btn btn-default btn-success glyphicon glyphicon-refresh"
        type="button"
        onClick={ () => { getEvents(trackingCode) } }>
       </button>
     </span>
    </div>
  );
}

TrackingFormView.propTypes = {
  trackingCode: React.PropTypes.string,
}
const mapStateToProps = (state) => ({
  trackingCode: state.trackingCode
});

const actionCreators = { setTrackingCode, getEvents }

const TrackingForm = connect(mapStateToProps, actionCreators)(TrackingFormView);

export default TrackingForm;
