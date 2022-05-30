class AddEnergyCostToCharacters < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :energy_cost, :integer
  end
end
