class CreateUserCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :user_characters do |t|
      t.references :character, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
