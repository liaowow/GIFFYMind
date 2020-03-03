Rails.application.routes.draw do
  resources :game_gifs
  resources :gifs, only: [:index]
  resources :games, only: [:index]
  resources :users, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
