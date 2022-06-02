class Enemy < ApplicationRecord
  belongs_to :disorder
  has_many :rooms, dependent: :destroy
end
