class MapsController < ApplicationController
  skip_before_action :authenticate_user!
  def show
    @places = Place.all
    @places = @places.tagged_with(params[:filters], any: true) if params[:filters].present?
    @markers = @places.map(&:coordinates)
  end
end
