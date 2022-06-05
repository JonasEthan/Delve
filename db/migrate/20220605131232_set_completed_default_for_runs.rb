class SetCompletedDefaultForRuns < ActiveRecord::Migration[7.0]
  def change
    change_column :runs, :completed, :boolean, default: false
  end
end
