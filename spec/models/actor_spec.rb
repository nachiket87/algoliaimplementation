require 'rails_helper'

RSpec.describe Actor, type: :model do
  describe 'associations' do
    it { should have_and_belong_to_many(:movies) }
  end
end
