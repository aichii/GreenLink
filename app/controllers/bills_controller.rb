class BillsController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        if current_user.fpl_account
          bills = current_user.fpl_account.bills
        else
          bills = []
        end
        render json: bills
      end
    end
  end
end
