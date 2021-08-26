class Pedalboard < ApplicationRecord
  belongs_to :user
  has_many :pedalboard_pedals, dependent: :destroy
  has_many :pedals, through: :pedalboard_pedals
  # validates :name, presence: true
  # validates :stereo, presence: true, inclusion: { in: [ true, false ] }
  # validates :pedal_order, presence: true
  # validates :user_id, presence: true, numericality: { only_integer: true }
end
