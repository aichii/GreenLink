class CreateFplAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :fpl_accounts do |t|
      t.string :encrypted_username, null: false
      t.string :encrypted_password, null: false
      t.belongs_to :user, null: false, foreign_key: true
      t.string :zipcode

      t.timestamps
    end
  end
end
