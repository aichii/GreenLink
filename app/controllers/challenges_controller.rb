class ChallengesController < ApplicationController
   
    def index
    end

    def show
        respond_to do |format|
            format.json do
                if current_user.fpl_account
                    challenges = Challenge.all
                else
                    challenges = []
                end
                render json: challenges.to_json( :include => [:tips])
            end
        end
    end

end
