Rails.application.routes.draw do
  devise_for :users, controllers: {
      registrations: 'users/registrations'
  }
  devise_scope :user do
    authenticated :user do
      root 'pages#index', as: :authenticated_root
      resources :categories
      resources :entries
      resources :usuarios, controller: 'users'
      get 'current_user', to: 'pages#current_user'
      get 'users', to: 'pages#get_users'
      #match '*path', to: 'panel/pages#dashboard', via: :all
    end
    unauthenticated :user do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

end
