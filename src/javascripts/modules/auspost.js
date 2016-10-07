import exampleResponse from '../../fixtures/auspost.json'
import credentials from '../../credentials/auspost'
import { proxyRequest } from './zendesk'
import _ from 'lodash'

const auspostHeaders = {
  "Content-Type": "application/json",
  "Authorization": "Basic "+ btoa(credentials.apiKey + ':' + credentials.password),
  "account-number": credentials.accountNumber
}

const trackAuspostParcel = (trackingCode = '63511244666062') => {
  let requestOptions = {
    url: "https://digitalapi.auspost.com.au/shipping/v1/track?tracking_ids=" + trackingCode,
    type: 'GET',
    headers: auspostHeaders
  }

  return proxyRequest(requestOptions).then( response => {
    return parseResponse(response)
  })
}

const parseResponse = (response) => {
  let result = {}
  let trackingResult = _.first(response.tracking_results)
  result.status = trackingResult.status
  result.trackingId = trackingResult.tracking_id
  result.events = _.first(trackingResult.trackable_items).events

  return result
}

export default trackAuspostParcel
