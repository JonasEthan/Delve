class CreateEnemies < ActiveRecord::Migration[7.0]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :health
      t.integer :energy
      t.integer :attack_damage
      t.integer :level
      t.boolean :boss
      t.references :disorder, null: false, foreign_key: true

      t.timestamps
    end
  end
end
