Rails.application.routes.draw do
  resources :registers
  resources :users
  post 'auth/:provider/callback', to: 'api/v1/users#create'
 delete 'users/:email', to: 'api/v1/users#destroy', constraints: { email: %r{[^/]+} }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
