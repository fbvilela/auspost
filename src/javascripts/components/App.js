import React from 'react';
import { ticketId } from '../modules/zendesk';
import { connect } from 'react-redux';
import TrackingForm from './TrackingForm';
import EventList from './EventList';

export const AppView = () => (
  <div>
    <TrackingForm />
    <EventList />
  </div>
);

const App = connect()(AppView);

export default App;
