class RemoveEnemyAttackingFromRooms < ActiveRecord::Migration[7.0]
  def change
    remove_column :rooms, :enemy_attacking
  end
end
