appid = ENV['appID']
apikey = ENV['adminAPI'] 

AlgoliaSearch.configuration = { 
  application_id: appid, 
  api_key: apikey,
  connect_timeout: 2,
  receive_timeout: 30,
  send_timeout: 30,
  batch_timeout: 120,
  search_timeout: 5
}
