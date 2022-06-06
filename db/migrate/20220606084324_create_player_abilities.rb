class CreatePlayerAbilities < ActiveRecord::Migration[7.0]
  def change
    create_table :player_abilities do |t|
      t.string :name
      t.text :description
      t.integer :ability_cost

      t.timestamps
    end
  end
end
