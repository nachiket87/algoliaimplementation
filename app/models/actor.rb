class Actor < ApplicationRecord
  has_and_belongs_to_many :movies, join_table: 'movie_actors'
end
