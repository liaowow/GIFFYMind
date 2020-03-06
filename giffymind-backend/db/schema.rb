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

ActiveRecord::Schema.define(version: 2020_03_06_142822) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "game_gifs", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "gif_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_game_gifs_on_game_id"
    t.index ["gif_id"], name: "index_game_gifs_on_gif_id"
  end

  create_table "games", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "attempts"
    t.integer "playtime"
    t.boolean "status", default: false
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "gifs", force: :cascade do |t|
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "game_gifs", "games"
  add_foreign_key "game_gifs", "gifs"
  add_foreign_key "games", "users"
end
