class RemoveEnergyCostFromCharacters < ActiveRecord::Migration[7.0]
  def change
    remove_column :characters, :energy_cost
  end
end
