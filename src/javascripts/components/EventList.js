import React from 'react';
import { connect } from 'react-redux';

export const EventListView = ({ trackedObject }) => (
  <div>
    <span>{trackedObject.status}</span>
    <ul>
      {trackedObject.events.map(event => (
        <li>{event.location}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return { trackedObject: state.trackedObject }
}

const EventList = connect(mapStateToProps)(EventListView);

export default EventList;
