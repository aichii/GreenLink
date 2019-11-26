class Bill < ApplicationRecord
  belongs_to :fpl_account

  after_create_commit :check_pending_challenges
  after_create_commit :issue_new_challenges

  def check_pending_challenges
    fpl_account.account_challenges.pending.each do |account_challenge|
      account_challenge.update!(achieved: account_challenge.challenge.achieved?(fpl_account))
    end
  end

  def issue_new_challenges
    new_challenges = Challenge.verifiable.sample(4)
    new_challenges.each do |challenge|
      AccountChallenge.create!(fpl_account: fpl_account, challenge: challenge)
    end
  end
end
