class Room < ApplicationRecord
  belongs_to :journey
  belongs_to :enemy

  # validates :room, presence: true
end
