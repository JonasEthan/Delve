class Game < ApplicationRecord
  belongs_to :character
  has_many :runs
end
