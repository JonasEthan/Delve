class CreateJourneyRuns < ActiveRecord::Migration[7.0]
  def change
    create_table :journey_runs do |t|

      t.timestamps
    end
  end
end
