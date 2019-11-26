class AccountChallenge < ApplicationRecord
  belongs_to :fpl_account
  belongs_to :challenge

  scope :pending, -> { where(achieved: nil) }
  scope :achieved, -> { where(achieved: true) }
  scope :failed, -> { where(achieved: false) }
end
