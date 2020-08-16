Rails.application.routes.draw do


  get 'current_user', to: 'pages#current_user'
  get 'get_data', to: 'pages#get_all_data'

  devise_for :users
  devise_scope :user do
    authenticated :user do
      root 'pages#index', as: :authenticated_root
      resources :categories
      resources :entries
      #match '*path', to: 'panel/pages#dashboard', via: :all
    end
    unauthenticated :user do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

end
