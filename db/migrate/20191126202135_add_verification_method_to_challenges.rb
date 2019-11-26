class AddVerificationMethodToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :verification_method, :string
  end
end
