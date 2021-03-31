Rails.application.routes.draw do
  # resources :comments

  # Authentication 
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
  resources :posts do 
    resources :comments, shallow: true
  end
  get '/users/:user_id/posts', to: 'posts#index_user'

  # User Comments

  # get '/posts/all', to: 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
