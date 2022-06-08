class CreateAMomentsRespites < ActiveRecord::Migration[7.0]
  def change
    create_table :a_moments_respites do |t|
      t.references :run, null: false, foreign_key: true
      t.references :the_collapse, null: false, foreign_key: true

      t.timestamps
    end
  end
end
