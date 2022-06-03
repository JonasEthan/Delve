class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    @character = Character.new(health: 100, energy: 50, attack_damage: 5)
    @character.save

    @user_character = UserCharacter.new(character_id: @character.id, user_id: current_user.id)
    @user_character.save

    @game = Game.new(character_id: @character.id)
    @game.save

    redirect_to new_journey_path
  end
end
