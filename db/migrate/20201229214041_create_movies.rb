class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :rating
      t.string :color
      t.string :image
      t.string :objectid
      t.integer :year
      t.float :score

      t.timestamps
    end
  end
end
