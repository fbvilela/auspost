import exampleResponse from '../../fixtures/auspost.json'
import credentials from '../../credentials/auspost'

const auspostHeaders = new Headers({
  "Content-Type": "application/json",
  "Authorization": "Basic "+ btoa(credentials.apiKey + ':' + credentials.password),
  "account-number": credentials.accountNumber
})

const requestOptions = {
  method: 'GET',
  headers: auspostHeaders,
  mode: 'no-cors',
  cache: 'default'
}

const trackAuspostParcel = (trackingCode) => {
  trackingCode = '63511244666062'
  console.log(auspostHeaders.get("Authorization"))
  let requestObject = new Request("https://digitalapi.auspost.com.au/shipping/v1/track?tracking_ids=" + trackingCode, requestOptions)
  return fetch(requestObject).then( response => {
    return response.json()
  })
}

export default trackAuspostParcel
