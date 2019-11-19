class FplAccount < ApplicationRecord
  belongs_to :user
  has_many :bills, dependent: :destroy

  include Encryptable
  attr_encrypted :username, :password
end
