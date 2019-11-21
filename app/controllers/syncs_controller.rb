class SyncsController < ApplicationController
  def create
    if current_user.fpl_account
      current_user.fpl_account.scrape_for_bills
    end
    render js: "window.dashboardCharts.load()"
  end
end
