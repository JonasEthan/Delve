class AddJourneyRunToRuns < ActiveRecord::Migration[7.0]
  def change
    remove_reference :runs, :journey, foreign_key: true
    add_reference :runs, :journey_run, null: false, foreign_key: true
  end
end
