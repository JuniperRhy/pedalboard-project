class PedalboardPedal < ApplicationRecord
  belongs_to :pedalboard
  belongs_to :pedal
  validates :pedalboard_id, presence: true
  validates :pedal_id, presence: true
end
