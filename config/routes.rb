Rails.application.routes.draw do
  devise_for :users

  root 'landing#show'
  resource :dashboard, only: [:show]
  resource :fpl_account, only: [:create, :destroy] do
    resource :sync, only: [:create]
  end
<<<<<<< HEAD
  resource :profile, only: [:create, :destroy]
=======
  resource :profile, only: [:create, :destroy, :show]
>>>>>>> a9b4980be88a28711daa9d202baa4f6184dca466
  resources :challenges, only: [:index]
  resources :tips, only: [:index]
  resources :bills, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end