import React, { PropTypes } from 'react'
import _ from 'lodash'
import moment from 'moment'

const prettyDate = (date) => {
  return moment(date).format('DD/MM/YYYY')
}

const truncate = (text) => {
  return _.truncate(text, { length: 15 })
}

export default Event = ({ event }) => (
  <tr>
    <td>{prettyDate(event.date)}</td>
    <td>{truncate(_.toLower(event.location))}</td>
    <td>{truncate(event.description)}</td>
  </tr>
)

Event.propTypes = {
  event: PropTypes.object.isRequired
}


//
// parse date
// trim description
//  on mouse over - show full description
