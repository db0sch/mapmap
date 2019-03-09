class MapsController < ApplicationController
  skip_before_action :authenticate_user!
  def show
    'hello'
  end
end
