class ChallengesController < ApplicationController
   
    def index
    end

    def show
        respond_to do |format|
            format.json do
                if current_user.fpl_account
                    challenge = Challenge.all
                else
                    challenge = []
                end
                render json: challenge.to_json( :include => [:tips])
            end
        end
    end

end
