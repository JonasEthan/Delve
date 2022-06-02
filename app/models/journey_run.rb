class JourneyRun < ApplicationRecord
  belongs_to :run
  belongs_to :journey
end
