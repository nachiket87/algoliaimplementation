require 'rails_helper'

RSpec.describe Genre, type: :model do
  it "should have a name" do
    expect(Genre.create(name: "test")).to be_valid
  end
end
