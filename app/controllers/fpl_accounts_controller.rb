class FplAccountsController < ApplicationController

  def index
 
  end

  def create
    fpl_account = FplAccount.new(username: params[:username], password: params[:password], user: current_user)
    if fpl_account.save
      redirect_to dashboard_url, fallback_location: root_url, notice: "Successfully logged in!"
    else
      redirect_to dashboard_url, fallback_location: root_url, alert: task.errors.full_messages.to_sentence.capitalize
    end
  end

  def destroy
    # @fpl_account = FplAccount.find(id: params[:id])
    # @fpl_account.destroy
    # redirect_back fallback_location: root_url, notice: "Account successfully deleted"
  end
end
