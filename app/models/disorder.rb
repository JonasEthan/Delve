class Disorder < ApplicationRecord
  has_many :enemies, dependent: :destroy
  has_many :journeys, dependent: :destroy
end
