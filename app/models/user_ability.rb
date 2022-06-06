class UserAbility < ApplicationRecord
  belongs_to :user
  belongs_to :player_ability
end
