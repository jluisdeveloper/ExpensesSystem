class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /materials
  # GET /materials.json
  def index
    @categories = Category.all
    render json: {
        categories: @categories,
    }, status: :ok
  end

  # GET /materials/1
  # GET /materials/1.json
  def show
  end

  # GET /materials/new
  def new
    @category = Category.new
  end

  # GET /materials/1/edit
  def edit
  end

  # POST /materials
  # POST /materials.json
  def create
    @category = Category.new(category_params)
    @category.save
    render json: { params: params, notice: 'Categoria registrada exitosamente' }
  end

  # PATCH/PUT /materials/1
  # PATCH/PUT /materials/1.json
  def update
    respond_to do |format|
      if @category.update(category_params)
        format.json { render :show, status: :ok, location: @category }
      else
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /materials/1
  # DELETE /materials/1.json
  def destroy
    @category.destroy
    render json: { notice: 'Categoria eliminada exitosamente' }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def category_params
    params.require(:category).permit(:name)
  end
end
