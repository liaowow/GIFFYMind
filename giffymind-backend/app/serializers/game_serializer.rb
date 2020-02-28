class GameSerializer < ActiveModel::Serializer
  attributes :id, :input
  has_one :user
end
