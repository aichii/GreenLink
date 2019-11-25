class FplAccount < ApplicationRecord
  belongs_to :user
  has_many :bills, dependent: :destroy
  has_many :syncs, dependent: :destroy

  include Encryptable
  attr_encrypted :username, :password

  default_scope { includes(:user)}
  
  scope :testing,         -> { where(zipcode: "33024" )}

  def scrape_for_bills
    BillScrapeJob.perform_later(self)
  end

  def as_json(options={})
    {
      id:                 id,
      zipcode:            zipcode,
      user_email:         user.email
    }
  end
end
