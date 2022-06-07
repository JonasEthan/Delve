class RemoveEnergyCostFromEnemies < ActiveRecord::Migration[7.0]
  def change
    remove_column :enemies, :energy_cost
  end
end
