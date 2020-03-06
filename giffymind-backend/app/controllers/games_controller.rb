class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
    end

    def create
        game = Game.create(game_params)
        render json: game
    end

    def update
        game = Game.find_by(id: params[:id])
        game.update(game_params)
        render json: game
    end

    private
    def game_params
        params.require(:game).permit(:user_id, :attempts, :playtime, :status)
    end
end
