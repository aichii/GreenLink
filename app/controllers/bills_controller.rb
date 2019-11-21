class BillsController < ApplicationController

    def index
        respond_to do |format|
          format.html{render :index}
          format.json do
            bills = Bill.all
            if bills.present?
                results = bills
            else
              results = []
            end
            render json: results
          end
        end
    end
    
end
