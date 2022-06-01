class Run < ApplicationRecord
  belongs_to :game
  has_many :journey_runs
end
