require 'rails_helper'

describe 'Movies API', type: :request do
  movie_params = {movie: {title: 'rspect testmovie'}}
  it 'returns return successful get response on index' do
    get '/api/v1/movies'
    expect(response).to have_http_status(:success)
  end

  it 'gives success statues on creation of a new movie' do
    post '/api/v1/movies', params: movie_params   
    expect(response).to have_http_status(:success)
  end

  it 'creates a new movie' do
    post '/api/v1/movies', params: movie_params   
    expect(Movie.last).to have_attributes movie_params[:movie]
  end
end
