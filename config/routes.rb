Rails.application.routes.draw do
  devise_for :users
  resource :about_us, only: [:show]

  root 'landing#show'
  resource :dashboard, only: [:show]
  resources :leaderboard, only: [:index]
  resource :fpl_account, only: [:create, :destroy] do
    resource :sync, only: [:create]
  end
  resources :fpl_accounts, only: [:index]
  resource :profile, only: [:create, :destroy]
  resources :challenges, only: [:index]
  resources :tips, only: [:index]
  resources :bills, only: [:index]

  if Rails.env.production?
    require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
