class Movie < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do 
    attributes :title, :actors, :genres, :alternate_names, :year
  end

  validates :title, presence: true
  has_many :alternate_names
  has_and_belongs_to_many :actors, join_table: 'movie_actors'
  has_and_belongs_to_many :genres, join_table: 'movie_genres'

end
