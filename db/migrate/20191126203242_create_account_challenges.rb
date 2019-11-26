class CreateAccountChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :account_challenges do |t|
      t.belongs_to :fpl_account, null: false, foreign_key: true
      t.belongs_to :challenge, null: false, foreign_key: true
      t.boolean :achieved

      t.timestamps
    end
  end
end
