class CreatePedalboardPedals < ActiveRecord::Migration[6.1]
  def change
    create_table :pedalboard_pedals do |t|
      t.belongs_to :pedalboard, null: false, foreign_key: true
      t.belongs_to :pedal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
