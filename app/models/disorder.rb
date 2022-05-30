class Disorder < ApplicationRecord
  has_many :enemies
  has_many :journeys
end
