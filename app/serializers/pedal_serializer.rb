class PedalSerializer < ActiveModel::Serializer
  attributes :id, :name, :effect_type, :price, :stereo, :number_of_inputs, :number_of_outputs, :image, :category
end
