Rails.application.routes.draw do
  resources :users
  post 'auth/:provider/callback', to: '/users#create'
  delete 'users/:email', to: 'api/v1/users#destroy', constraints: { email: %r{[^/]+} }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
