class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.boolean :completed
      t.integer :position
      t.boolean :enemy_attacking
      t.references :journey, null: false, foreign_key: true
      t.references :enemy, null: false, foreign_key: true

      t.timestamps
    end
  end
end
