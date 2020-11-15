Rails.application.routes.draw do
  root to: 'maps#index'
  get 'maps/index'
  get 'maps/show'
  get 'maps/new'
  get 'maps/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
