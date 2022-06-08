class CreateTheCollapses < ActiveRecord::Migration[7.0]
  def change
    create_table :the_collapses do |t|
      t.string :name
      t.integer :health
      t.integer :energy
      t.integer :attack_damage

      t.timestamps
    end
  end
end
