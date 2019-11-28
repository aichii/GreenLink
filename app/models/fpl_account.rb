class FplAccount < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user
  has_many :bills, dependent: :destroy
  has_many :syncs, dependent: :destroy
  has_many :account_challenges, dependent: :destroy
  has_many :challenges, through: :account_challenges

  include Encryptable
  attr_encrypted :username, :password

  default_scope { includes(user: :profile) }

  scope :limit_users,   -> { limit(2) }
  # scopre :sort_by_zip   -> { where(zipcope: current_user.fpl_account.zipcode)}

  def scrape_for_bills
    BillScrapeJob.perform_later(self)
  end

  def self.points_sorted 
    FplAccount.all.sort_by { |acc| acc.user.points * -1 }
  end

  def as_json(options={})
    {
      id:                 id,
      zipcode:            zipcode,
      user_email:         user.email,
      points:             user.points,
      avatar:             user.profile&.avatar ? url_for(user.profile.avatar) : ''
    }
  end
end
