class MovieSerializer
  include JSONAPI::Serializer
  attributes :title, :year
  has_many :actors
  has_many :alternate_names
  has_many :genres

end
