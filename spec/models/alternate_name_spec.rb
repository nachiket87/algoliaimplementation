require 'rails_helper'

RSpec.describe AlternateName, type: :model do
  describe 'associations' do
    it { should belong_to(:movie) }
  end
end
