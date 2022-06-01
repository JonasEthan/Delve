class JourneyRun < ApplicationRecord
  belongs_to :runs
  belongs_to :journeys
end
