class AddImgUrlToEnemies < ActiveRecord::Migration[7.0]
  def change
    add_column :enemies, :img_url, :string
  end
end
