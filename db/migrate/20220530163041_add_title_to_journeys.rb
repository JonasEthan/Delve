class AddTitleToJourneys < ActiveRecord::Migration[7.0]
  def change
    add_column :journeys, :title, :string
  end
end
