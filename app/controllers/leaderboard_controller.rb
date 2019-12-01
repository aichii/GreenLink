class LeaderboardController < ApplicationController
  def index
    @all_users = User.all.limit(5)

    respond_to do |format|
      format.html
      format.json do
        if current_user.fpl_account
          all_accounts = FplAccount.points_sorted
        else 
          all_accounts = []
        end
        render json: all_accounts.to_json
      end
    end
  end
end
