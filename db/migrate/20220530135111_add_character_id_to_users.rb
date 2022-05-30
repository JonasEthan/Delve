class AddCharacterIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :character, null: false, foreign_key: true
  end
end
