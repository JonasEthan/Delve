class CreateRuns < ActiveRecord::Migration[7.0]
  def change
    create_table :runs do |t|
      t.references :journey, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true
      t.boolean :completed

      t.timestamps
    end
  end
end
