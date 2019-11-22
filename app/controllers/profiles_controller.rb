class ProfilesController < ApplicationController
  def show
  end
  
  def create
    if current_user.profile
      current_user.profile.update(avatar: params[:avatar])
    else
      current_user.create_profile(avatar: params[:avatar])
    end
    redirect_back fallback_location: root_url, notice: "Profile successfully updated"
  end

  def destroy
    current_user.avatar&.destroy
    redirect_to dashboard_url, fallback_location: root_url, notice: "FPL Account successfully deleted"
  end
end
