class FplAccount < ApplicationRecord
  belongs_to :user

  include Encryptable
  attr_encrypted :username, :password
end
