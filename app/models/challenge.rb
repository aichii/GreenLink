class Challenge < ApplicationRecord
    has_many :challenge_tips
    has_many :tips, through: :challenge_tips
    has_many :account_challenges, dependent: :destroy

    scope :verifiable, -> { where.not(verification_method: nil) }

    def achieved?(fpl_account)
        send(verification_method.to_sym, fpl_account)
    end

    private

    def last_bill_under_1000_kwh?(fpl_account)
        return false unless fpl_account.bills.any?
        fpl_account.bills.last.kilowatt_hours < 1000
    end
end
