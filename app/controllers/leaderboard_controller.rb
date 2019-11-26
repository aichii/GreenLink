class LeaderboardController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        all_accounts = FplAccount.all
        render json: all_accounts.to_json
      end
    end
  end
end
