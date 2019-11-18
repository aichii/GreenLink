Rails.application.routes.draw do
  devise_for :users
<<<<<<< HEAD

  root 'dashboards#show'
  resource :fpl_account, only: [:create, :destroy]
=======
  root 'dashboard#show'
>>>>>>> divide resoures for each route
  resources :challenges, only: [:index]
  resources :tips, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
