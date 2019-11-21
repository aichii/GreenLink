class CreateSyncs < ActiveRecord::Migration[6.0]
  def change
    create_table :syncs do |t|
      t.belongs_to :fpl_account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
