class GameSerializer < ActiveModel::Serializer
  attributes :id, :attempts, :playtime, :status
  has_one :user
end
