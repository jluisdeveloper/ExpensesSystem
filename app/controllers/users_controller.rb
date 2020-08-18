class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render :json => @users

    #render :json => @programs, :include => {:insurer => {:only => :name}}, :except => [:created_at, :updated_at]
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new
    @user.name = params[:name]
    @user.dni = params[:dni]
    @user.email = params[:email]
    @user.password = params[:password]
    @user.password_confirmation = params[:password_confirmation]
    @user.save!

    render json: { params: params, notice: 'Usuario registrado exitosamente' }
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user.update(user_params)
    render json: { notice: 'Usuario actualizado exitosamente' }
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    render json: { notice: 'Usuario eliminado exitosamente' }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:dni, :name, :rol, :avatar, :email, :password, :password_confirmation, :remember_me)
  end
end
