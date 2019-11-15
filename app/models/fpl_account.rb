class FplAccount < ApplicationRecord
  include Encryptable

  attr_encrypted :username, :password
end
