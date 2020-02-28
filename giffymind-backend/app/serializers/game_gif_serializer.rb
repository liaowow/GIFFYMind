class GameGifSerializer < ActiveModel::Serializer
  attributes :id
  has_one :game
  has_one :gif
end
