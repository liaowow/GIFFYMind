class GameGifsController < ApplicationController

    def index
        game_gifs = GameGif.all
        render json: game_gifs       
    end

end
