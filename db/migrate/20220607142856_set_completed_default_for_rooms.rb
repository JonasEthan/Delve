class SetCompletedDefaultForRooms < ActiveRecord::Migration[7.0]
  def change
    change_column :rooms, :completed, :boolean, default: false
  end
end
