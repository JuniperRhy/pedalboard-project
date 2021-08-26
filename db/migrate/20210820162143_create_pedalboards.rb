class CreatePedalboards < ActiveRecord::Migration[6.1]
  def change
    create_table :pedalboards do |t|
      t.string :name
      t.boolean :stereo
      t.integer :pedal_order, array: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
