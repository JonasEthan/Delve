class RemoveJourneyRunFromRuns < ActiveRecord::Migration[7.0]
  def change
    remove_reference :runs, :journey_run, foreign_key: true
  end
end
