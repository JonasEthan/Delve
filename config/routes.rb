Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  resources :characters

  resources :journeys, only: [:new, :create]

  resources :games, only: [:create] do
    resources :runs, only: [:create]
    resources :journey_runs, only: [:create]
  end
                      # edit & update ?


  resources :rooms do
    resources :enemies # do we need this ???????
  end

  # get 'journeys/menu', to: 'journeys#menu'
  # get 'journeys/completed', to: 'journeys#completed'
end
