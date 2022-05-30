class CreateDisorders < ActiveRecord::Migration[7.0]
  def change
    create_table :disorders do |t|
      t.string :name
      t.text :description
      t.text :success_text
      t.text :meltdown_text

      t.timestamps
    end
  end
end
