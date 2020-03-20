class CourtsController < ApplicationController

  def index
    @courts = Court.all
  end

  def show
    @court = Court.find(params[:id])
  end

  private

  def court_params
    params.require(:court).permit(:name, :street, :city, :state, :country, :court_photo)
  end
end
