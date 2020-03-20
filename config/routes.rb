Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :vi do
      resources :courts, only: [:index, :show]
    end
  end

  resources :courts, only:[:index, :show, :new, :create, :edit, :update, :destroy]

  get '*page', to: 'courts#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
