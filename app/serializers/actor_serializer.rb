class ActorSerializer
  include JSONAPI::Serializer
  attributes :name, :facets
end
