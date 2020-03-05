class AddPlayTimeToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :playtime, :integer
  end
end
