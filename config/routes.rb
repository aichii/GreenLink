Rails.application.routes.draw do
  devise_for :users
  root 'dashboards#show'
  resource :fpl_account, only: [:create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
