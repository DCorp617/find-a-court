Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :courts, only:[:index, :show, :new, :create, :edit, :update, :destroy, :search] 
end
