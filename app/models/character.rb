class Character < ApplicationRecord
  has_many :games
  has_many :users
end

# We seed 1 single character with 1 ID, that EVERY player uses.
