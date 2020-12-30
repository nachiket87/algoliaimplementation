class CreateAlternateNames < ActiveRecord::Migration[6.1]
  def change
    create_table :alternate_names do |t|
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
