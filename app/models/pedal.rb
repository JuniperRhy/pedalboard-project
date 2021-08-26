class Pedal < ApplicationRecord
    has_many :pedalboard_pedals 
    has_many :pedalboards, through: :pedalboard_pedals
    # validates :name, presence: true, uniqueness: true
    # validates :effect_type, presence: true
    # validates :price, presence: true#, numericality: { only_integer: true }
    # validates :stereo, presence: true#, inclusion: { in: [ true, false ] }
    # validates :number_of_inputs, presence: true#, numericality: { only_integer: true }
    # validates :number_of_outputs, presence: true#, numericality: { only_integer: true }
    # validates :image, presence: true
    # validates :category, presence: true
end
