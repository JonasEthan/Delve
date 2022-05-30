class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.integer :health
      t.integer :energy
      t.integer :attack_damage
      t.integer :xp
      t.integer :level

      t.timestamps
    end
  end
end
