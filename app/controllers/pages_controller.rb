class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:current_user, :get_categories, :get_users]

  def index
  end

  def current_user
    @user ||= User.find(session["warden.user.user.key"][0][0])
    render json: {
        current_user: @user,
    }, status: :ok
  end

  def get_users
    @users = User.all
    render :json => @users, :only => [:name, :id]
  end

end
