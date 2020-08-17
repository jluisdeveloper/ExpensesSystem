class UsersController < ApplicationController
  before_action :set_entry, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /entries
  # GET /entries.json
  def index
    @users = User.all
    render :json => @users

    #render :json => @programs, :include => {:insurer => {:only => :name}}, :except => [:created_at, :updated_at]
  end

  # GET /entries/1
  # GET /entries/1.json
  def show
  end

  # GET /entries/new
  def new
    @user = User.new
  end

  # GET /entries/1/edit
  def edit
  end

  # POST /entries
  # POST /entries.json
  def create
    @user = User.new(user_params)
    @user.skip_confirmation!
    @user.save

    render json: { params: params, notice: 'Usuario registrado exitosamente' }
  end

  # PATCH/PUT /entries/1
  # PATCH/PUT /entries/1.json
  def update
    @user.update(user_params)
    render json: { notice: 'Usuario actualizado exitosamente' }
  end

  # DELETE /entries/1
  # DELETE /entries/1.json
  def destroy
    @user.destroy
    render json: { notice: 'Usuario eliminado exitosamente' }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_entry
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:dni, :name, :rol, :avatar, :email, :password, :password_confirmation, :remember_me)
  end
end
