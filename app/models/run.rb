class Run < ApplicationRecord
  belongs_to :game
  has_many :journey_runs
  has_many :journeys, through: :journey_runs
end
