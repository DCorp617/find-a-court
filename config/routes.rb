Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :courts, only:[:index, :show, :new, :create, :edit, :update, :destroy]

  get '*page', to: 'courts#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
