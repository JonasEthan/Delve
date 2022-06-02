# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_02_100603) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.integer "health"
    t.integer "energy"
    t.integer "attack_damage"
    t.integer "xp"
    t.integer "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "energy_cost"
  end

  create_table "disorders", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "success_text"
    t.text "meltdown_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "energy"
    t.integer "attack_damage"
    t.integer "level"
    t.boolean "boss"
    t.bigint "disorder_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "energy_cost"
    t.string "img_url"
    t.index ["disorder_id"], name: "index_enemies_on_disorder_id"
  end

  create_table "games", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id", null: false
    t.index ["character_id"], name: "index_games_on_character_id"
  end

  create_table "journey_runs", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "journey_id", null: false
    t.bigint "run_id", null: false
    t.index ["journey_id"], name: "index_journey_runs_on_journey_id"
    t.index ["run_id"], name: "index_journey_runs_on_run_id"
  end

  create_table "journeys", force: :cascade do |t|
    t.boolean "completed"
    t.bigint "disorder_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.index ["disorder_id"], name: "index_journeys_on_disorder_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.boolean "completed"
    t.integer "position"
    t.boolean "enemy_attacking"
    t.bigint "journey_id", null: false
    t.bigint "enemy_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["enemy_id"], name: "index_rooms_on_enemy_id"
    t.index ["journey_id"], name: "index_rooms_on_journey_id"
  end

  create_table "runs", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.boolean "completed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_runs_on_game_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.bigint "character_id", null: false
    t.index ["character_id"], name: "index_users_on_character_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "enemies", "disorders"
  add_foreign_key "games", "characters"
  add_foreign_key "journey_runs", "journeys"
  add_foreign_key "journey_runs", "runs"
  add_foreign_key "journeys", "disorders"
  add_foreign_key "rooms", "enemies"
  add_foreign_key "rooms", "journeys"
  add_foreign_key "runs", "games"
  add_foreign_key "users", "characters"
end
