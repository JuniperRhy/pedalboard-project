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

ActiveRecord::Schema.define(version: 2021_08_20_163356) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pedalboard_pedals", force: :cascade do |t|
    t.bigint "pedalboard_id", null: false
    t.bigint "pedal_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pedal_id"], name: "index_pedalboard_pedals_on_pedal_id"
    t.index ["pedalboard_id"], name: "index_pedalboard_pedals_on_pedalboard_id"
  end

  create_table "pedalboards", force: :cascade do |t|
    t.string "name"
    t.boolean "stereo"
    t.integer "pedal_order", array: true
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_pedalboards_on_user_id"
  end

  create_table "pedals", force: :cascade do |t|
    t.string "name"
    t.string "effect_type"
    t.integer "price"
    t.boolean "stereo"
    t.integer "number_of_inputs"
    t.integer "number_of_outputs"
    t.string "image"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "pedalboard_pedals", "pedalboards"
  add_foreign_key "pedalboard_pedals", "pedals"
  add_foreign_key "pedalboards", "users"
end
