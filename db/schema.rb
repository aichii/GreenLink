# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_26_203242) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_challenges", force: :cascade do |t|
    t.bigint "fpl_account_id", null: false
    t.bigint "challenge_id", null: false
    t.boolean "achieved"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["challenge_id"], name: "index_account_challenges_on_challenge_id"
    t.index ["fpl_account_id"], name: "index_account_challenges_on_fpl_account_id"
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bills", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "kilowatt_hours", null: false
    t.integer "amount_cents", null: false
    t.bigint "fpl_account_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fpl_account_id"], name: "index_bills_on_fpl_account_id"
  end

  create_table "challenge_tips", force: :cascade do |t|
    t.bigint "challenge_id", null: false
    t.bigint "tip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["challenge_id"], name: "index_challenge_tips_on_challenge_id"
    t.index ["tip_id"], name: "index_challenge_tips_on_tip_id"
  end

  create_table "challenges", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "points"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "verification_method"
  end

  create_table "fpl_accounts", force: :cascade do |t|
    t.string "encrypted_username", null: false
    t.string "encrypted_password", null: false
    t.bigint "user_id", null: false
    t.string "zipcode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_fpl_accounts_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "syncs", force: :cascade do |t|
    t.bigint "fpl_account_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fpl_account_id"], name: "index_syncs_on_fpl_account_id"
  end

  create_table "tips", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "type_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "account_challenges", "challenges"
  add_foreign_key "account_challenges", "fpl_accounts"
  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "bills", "fpl_accounts"
  add_foreign_key "challenge_tips", "challenges"
  add_foreign_key "challenge_tips", "tips"
  add_foreign_key "fpl_accounts", "users"
  add_foreign_key "profiles", "users"
  add_foreign_key "syncs", "fpl_accounts"
end
