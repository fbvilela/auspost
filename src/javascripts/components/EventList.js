import React from 'react';
import { connect } from 'react-redux';

export const EventListView = ({ events }) => (
  <div>
    <h1>EventList</h1>
    <ul>
      {events.map(event => (
        <li>{event}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return { events: state.events }
}

const EventList = connect(mapStateToProps)(EventListView);

export default EventList;
