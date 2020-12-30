class MovieSerializer
  include JSONAPI::Serializer
  attributes :title, :year, :objectid
  has_many :actors
  has_many :alternate_names
  has_many :genres
end
