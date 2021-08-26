class PedalboardSerializer < ActiveModel::Serializer
  attributes :id, :name, :stereo, :pedal_order
  has_one :user
end
