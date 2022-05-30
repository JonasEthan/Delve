class AddEnergyCostToEnemies < ActiveRecord::Migration[7.0]
  def change
    add_column :enemies, :energy_cost, :integer
  end
end
