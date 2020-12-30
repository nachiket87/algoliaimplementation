require 'rails_helper'

RSpec.describe MovieActor, type: :model do
  it "should have an Actor" do
    expect(MovieActor.create(actor: nil)).to_not be_valid
  end
  it "should have a Movie" do
    expect(MovieActor.create(movie: nil)).to_not be_valid
  end

  describe 'associations' do
    it { should belong_to(:movie).class_name('Movie') }
    it { should belong_to(:actor) }
  end

end
