AlgoliaSearch.configuration = { 
  application_id: process.env.appID, 
  api_key: process.env.adminAPI,
  connect_timeout: 2,
  receive_timeout: 30,
  send_timeout: 30,
  batch_timeout: 120,
  search_timeout: 5
}
