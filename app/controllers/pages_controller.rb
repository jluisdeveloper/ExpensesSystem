class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:current_user, :get_all_data]

  def index
  end

  def current_user
    @user ||= User.find(session["warden.user.user.key"][0][0])
    render json: {
        current_user: @user,
    }, status: :ok
  end

  def get_all_data
    @users = User.all
    @categories = Category.all

    render :json => @users, :only => [:name, :id]

    # render json: {
    #     users: @users,
    #     categories: @categories,
    # }, status: :ok
  end

  #render :json => @programs, :include => {:insurer => {:only => :name}}, :except => [:created_at, :updated_at]


end
