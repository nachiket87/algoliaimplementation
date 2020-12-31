# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

file = File.read('movies.json')

data_hash = JSON.parse(file)

data_hash.first(1000) do |m|
  title = m["title"]
  year = m["year"].to_i
  image = m["image"]
  color = m["color"]
  score = m["score"]
  rating = m["rating"]
  objectid = m["objectID"]
  movie = Movie.create(title: title, year: year, image: image, color: color, score: score, rating: rating, objectid: objectid)

  m["alternative_titles"].each do |alternate_name|
    alternate = AlternateName.create(name: alternate_name, movie: movie)
  end

  m["actors"].count.times do |index|
    a = Actor.find_by(name: m['actors'][index])
    a = Actor.create(name: m["actors"][index], facets: m["actor_facets"][index]) unless a.present?
    MovieActor.create(movie: movie, actor: a)
  end

  m["genre"].each do |genre|
    g = Genre.find_by(name: genre)

    if g.present?  
      MovieGenre.create(movie: movie, genre:g) 
    else 
      a =  Genre.create(name: genre)
      MovieGenre.create(movie: movie, genre:a) 
    end
  end
end
