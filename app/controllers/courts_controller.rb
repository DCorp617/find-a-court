class CourtsController < ApplicationController

  def index
    @courts = Court.all
  end

  def show
    @court = Court.find(params[:id])
  end

  def  new
    @court = Court.new
  end

  def create
    @court = Court.new(court_params)

    if @court.save
      flash[:notice] = "Basketball Court profile successfully created"
      redirect_to @court
    else
      flash.now[:notice] = "Failed to create court profile"
      render :new
    end
  end

  private

  def court_params
    params.require(:court).permit(:name, :street, :city, :state, :country, :court_photo)
  end

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "Please log in to continue"
      redirect_to root_path
    end
  end
end
