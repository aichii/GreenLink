class FplAccountsController < ApplicationController

  def index
  end
  def create
    @fpl_account = FplAccount.new(username: params[:username], password: params[:password], user: current_user)
    @fpl_account.save
    redirect_back fallback_location: root_url, notice: "Successfully logged in!"
  end

  def destroy
    @fpl_account.destroy
    redirect_back fallback_location: root_url, notice: "Account successfully deleted"
  end
end
