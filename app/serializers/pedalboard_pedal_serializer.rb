class PedalboardPedalSerializer < ActiveModel::Serializer
  attributes :id
  has_one :pedalboard
  has_one :pedal
end
