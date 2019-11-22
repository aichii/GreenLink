class ProfilesController < ApplicationController
  def show
  end
  
  def create
    user = current_user
  end

  def destroy
    current_user.avatar&.destroy
    redirect_to dashboard_url, fallback_location: root_url, notice: "FPL Account successfully deleted"
  end
end
