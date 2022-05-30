class Journey < ApplicationRecord
  belongs_to :disorder
  has_many :rooms
  has_many :runs
end
