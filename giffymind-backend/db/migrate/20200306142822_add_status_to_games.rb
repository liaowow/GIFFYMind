class AddStatusToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :status, :boolean, default: false
  end
end
