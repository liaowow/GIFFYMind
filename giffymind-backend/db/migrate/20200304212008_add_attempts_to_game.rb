class AddAttemptsToGame < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :attempts, :integer
  end
end
