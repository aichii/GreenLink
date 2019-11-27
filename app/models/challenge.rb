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

	def last_bill_5_dollars_less?(fpl_account)
		return false unless fpl_account.bills.any?
		fpl_account.bills.last.amount_cents - fpl_account.bills.all[-2].amount_cents > 500
	end

	def last_bill_20_dollars_less?(fpl_account)
		return false unless fpl_account.bills.any?
		fpl_account.bills.last.amount_cents - fpl_account.bills.all[-2].amount_cents > 2_000
	end

	def last_bill_20_kwh_less?(fpl_account)
		return false unless fpl_account.bills.any?
		fpl_account.bills.last.kilowatt_hours - fpl_account.bills.all[-2].kilowatt_hours > 20
	end
end
