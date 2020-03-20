class Api::V1::CourtsController < ApplicationController

   def index
     render json: Court.all
   end

   def show
     court = Court.find(params[:id])
     render json: { court: court }
   end
end
