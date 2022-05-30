class Room < ApplicationRecord
  belongs_to :journey
  belongs_to :enemy
end
