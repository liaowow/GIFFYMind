class CreateGameGifs < ActiveRecord::Migration[6.0]
  def change
    create_table :game_gifs do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.belongs_to :gif, null: false, foreign_key: true

      t.timestamps
    end
  end
end
