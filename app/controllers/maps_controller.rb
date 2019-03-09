class MapsController < ApplicationController
  skip_before_action :authenticate_user!
  def show
    @markers = Place.all.map(&:coordinates)
  end
end
