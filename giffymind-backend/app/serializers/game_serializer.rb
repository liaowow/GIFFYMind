class GameSerializer < ActiveModel::Serializer
  attributes :id, :attempts, :playtime 
  has_one :user
end
