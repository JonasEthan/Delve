class Journey < ApplicationRecord
  belongs_to :disorder
  has_many :rooms
  has_many :journey_runs
  has_many :runs, through: :journey_runs
end
