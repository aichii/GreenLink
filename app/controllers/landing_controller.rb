class LandingController < ActionController::Base
  skip_before_action :authenticate_user!, raise: false
  def show
    return redirect_to dashboard_url if user_signed_in?
  end
end
