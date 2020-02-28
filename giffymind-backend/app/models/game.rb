class Game < ApplicationRecord
  belongs_to :user
  has_many :game_gifs
  has_many :gifs, through: :game_gifs
end
