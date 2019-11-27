class TipsController < ApplicationController
   def index
    respond_to do |format|
      format.html
      format.json do
        tips = Tip.all
        if tips.present?
            allTips = tips
        else
          allTips = []
        end
    render json: allTips
    end    
  end
end

end
