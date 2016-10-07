import ZAFClient from 'zendesk_app_framework_sdk';
var client = ZAFClient.init();

export const ticketId = () => {
  return client.context().then(context => {
    return context.ticketId;
  })
}

export const proxyRequest = (options) => {
  return client.request(options)
}
