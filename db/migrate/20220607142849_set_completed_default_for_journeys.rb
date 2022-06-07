class SetCompletedDefaultForJourneys < ActiveRecord::Migration[7.0]
  def change
    change_column :journeys, :completed, :boolean, default: false
  end
end
