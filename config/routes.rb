Rails.application.routes.draw do
  devise_for :users
  root to: 'maps#show'
  resource :maps, only: :show
  resources :markers, only: :index
end
