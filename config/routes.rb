Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :characters do
    resources :games, only: [:create]
  end

  resources :games do
    resources :runs, only: [:create]
  end
                      # edit & update ?


  resources :rooms do
    resources :enemies # do we need this ???????
  end
end
