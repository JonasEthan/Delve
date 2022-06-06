class CreateEnemyAbilities < ActiveRecord::Migration[7.0]
  def change
    create_table :enemy_abilities do |t|
      t.string :name
      t.text :description
      t.integer :ability_cost
      t.references :enemy, null: false, foreign_key: true

      t.timestamps
    end
  end
end
