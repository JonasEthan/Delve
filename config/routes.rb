Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  get '/test-fight', to: 'pages#test_fight'
  get '/menu', to: 'journeys#menu'
  get '/about', to: 'pages#about'
  get '/team', to: 'pages#team'
  get '/donate', to: 'pages#donate'

  resources :characters

  resources :journeys, only: [:new, :create]

  resources :games, only: [:create] do
    resources :runs, only: [:create] do
      resources :journey_runs, only: [:create]
    end
  end
                      # edit & update ?

  resources :rooms, only: [:new, :create, :show]

  get 'journeys/menu', to: 'journeys#menu'
  get 'journeys/completed', to: 'journeys#completed'
  get 'journeys/repeat', to: 'journeys#repeat'

  get '/about', to: 'pages#about'
  get '/team', to: 'pages#team'
end
