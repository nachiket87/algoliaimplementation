class AddNameToAlternateTitle < ActiveRecord::Migration[6.1]
  def change
    add_column :alternate_names, :name, :string
  end
end
