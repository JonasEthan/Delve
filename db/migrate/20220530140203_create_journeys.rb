class CreateJourneys < ActiveRecord::Migration[7.0]
  def change
    create_table :journeys do |t|
      t.boolean :completed
      t.references :disorder, null: false, foreign_key: true

      t.timestamps
    end
  end
end
