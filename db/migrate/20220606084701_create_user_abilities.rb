class CreateUserAbilities < ActiveRecord::Migration[7.0]
  def change
    create_table :user_abilities do |t|
      t.references :user, null: false, foreign_key: true
      t.references :player_ability, null: false, foreign_key: true

      t.timestamps
    end
  end
end
