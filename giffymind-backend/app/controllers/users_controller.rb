class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        # byebug
        user = User.find_or_create_by(user_params)
        new_game = Game.create(user_id: user.id, attempts: 0, playtime: 0)
        new_set = []
        4.times do
            new_game_gif = GameGif.create(game_id: new_game.id, gif_id: Gif.all.sample.id)
            new_game_gif_url = Gif.find_by(id: new_game_gif.gif_id).image_url
            new_set.push(new_game_gif_url)
        end

        render json: { user: user, correct: new_set, game: new_game }
    end

    private 
    def user_params
        params.require(:user).permit(:username)
    end
end
