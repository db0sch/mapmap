class MarkersController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @places = Place.all
    @places = @places.tagged_with(params[:locations], :on => :locations, :any => true) if params[:locations].present?
    @places = @places.tagged_with(params[:filters], :on => :tags, :any => true) if params[:filters].present?
    @markers = @places.map(&:coordinates)
    render json: @markers
  end
end
