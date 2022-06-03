class RemoveCharacterIdFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_reference :users, :character, index: true
  end
end
