class MapsController < ApplicationController
  skip_before_action :authenticate_user!
  def show
    @markers = [{ lng: 52.537693, lat: 13.4246498 }]
  end
end
