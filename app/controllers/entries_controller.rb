class EntriesController < ApplicationController
  before_action :set_entry, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /entries
  # GET /entries.json
  def index
    @entries = Entry.all
    render :json => @entries, :include => {
        :user => {:only => [:id, :name]},
        :category => {:only => [:id, :name]},
      }, :except => [:category_id, :user_id]

    #render :json => @programs, :include => {:insurer => {:only => :name}}, :except => [:created_at, :updated_at]
  end

  # GET /entries/1
  # GET /entries/1.json
  def show
  end

  # GET /entries/new
  def new
    @entry = Entry.new
  end

  # GET /entries/1/edit
  def edit
  end

  # POST /entries
  # POST /entries.json
  def create
    @entry = Entry.new(entry_params)
    @entry.save

    render json: { params: params, notice: 'Entrada registrada exitosamente' }
  end

  # PATCH/PUT /entries/1
  # PATCH/PUT /entries/1.json
  def update
    @entry.update(entry_params)
    render json: { notice: 'Entrada actualizada exitosamente' }
  end

  # DELETE /entries/1
  # DELETE /entries/1.json
  def destroy
    @entry.destroy
    render json: { notice: 'Entrada eliminada exitosamente' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def entry_params
      params.require(:entry).permit(:day, :totalExpenses, :cash, :totalEntry, :category_id, :user_id)
    end
end
