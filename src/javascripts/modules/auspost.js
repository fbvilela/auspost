import exampleResponse from '../../fixtures/auspost.json'
import credentials from '../../credentials/auspost'
import { proxyRequest } from './zendesk'

const trackingCode = '63511244666062'
const auspostHeaders = {
  "Content-Type": "application/json",
  "Authorization": "Basic "+ btoa(credentials.apiKey + ':' + credentials.password),
  "account-number": credentials.accountNumber
}

const requestOptions = {
  url: "https://digitalapi.auspost.com.au/shipping/v1/track?tracking_ids=" + trackingCode,
  type: 'GET',
  headers: auspostHeaders
}

const trackAuspostParcel = (trackingCode) => {
  return proxyRequest(requestOptions)
}

export default trackAuspostParcel
