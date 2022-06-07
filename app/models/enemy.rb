class Enemy < ApplicationRecord
  belongs_to :disorder
  has_many :rooms, dependent: :destroy
  has_many :enemy_abilities
end
