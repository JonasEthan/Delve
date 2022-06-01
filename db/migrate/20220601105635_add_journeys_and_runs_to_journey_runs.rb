class AddJourneysAndRunsToJourneyRuns < ActiveRecord::Migration[7.0]
  def change
    add_reference :journey_runs, :journey, null: false, foreign_key: true
    add_reference :journey_runs, :run, null: false, foreign_key: true
  end
end
