class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :fpl_account, dependent: :destroy
  has_one :profile, dependent: :destroy

  def points
    return 0 unless fpl_account
    Challenge.joins(:account_challenges)
      .where(account_challenges: { id: fpl_account.account_challenges.achieved.pluck(:id) })
      .sum(:points)
  end
end
