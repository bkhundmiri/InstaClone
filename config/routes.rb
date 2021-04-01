Rails.application.routes.draw do
  # Authentication 
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users, shallow: true

  resources :posts, shallow: true do
    resources :pictures, only: [:create]
    resources :comments, only: [:create, :destroy]
  end

  get '/users/:user_id/posts', to: 'posts#index_user'

  # User Comments

  # get '/posts/all', to: 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
