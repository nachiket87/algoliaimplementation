require 'rails_helper'

RSpec.describe Movie, type: :model do
  it "should have a title field" do
    expect(Movie.create(title: nil)).to_not be_valid
  end

  it { should have_many(:movie_actors) }


end
