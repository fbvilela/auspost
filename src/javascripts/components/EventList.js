import React from 'react'
import { connect } from 'react-redux'
import Event from './Event'

export const EventListView = ({ trackedObject }) => (
  <div className='container'>
    <span className='status'>{trackedObject.status}</span>
    <table className='table'>
      <tbody className='table-striped table-condensed'>
        {trackedObject.events.map(event => (
          <Event event={event} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => {
  return { trackedObject: state.trackedObject }
}

const EventList = connect(mapStateToProps)(EventListView);

export default EventList;
