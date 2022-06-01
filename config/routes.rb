Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/test-fight', to: 'pages#test_fight'

  resources :characters

  resources :games, only: [:create] do
    resources :runs, only: [:create]
  end
                      # edit & update ?


  resources :rooms do
    resources :enemies # do we need this ???????
  end

  # get 'journeys/menu', to: 'journeys#menu'
  # get 'journeys/completed', to: 'journeys#completed'
end
