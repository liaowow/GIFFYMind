class Gif < ApplicationRecord
    has_many :game_gifs
    has_many :games, through: :game_gifs
end
