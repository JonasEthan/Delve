class RemoveUserIdFromGames < ActiveRecord::Migration[7.0]
  def change
    remove_reference :games, :user, index: true
  end
end
