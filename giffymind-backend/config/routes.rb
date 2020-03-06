Rails.application.routes.draw do
  resources :game_gifs, only: [:index]
  resources :gifs, only: [:index]
  resources :games, only: [:index, :create, :update]
  resources :users, only: [:index, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
