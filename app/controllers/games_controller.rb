class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    @character = Character.new(health: 10, energy: 10, attack_damage: 10)
    @character.save
    current_user.character = @character
    @game = Game.new(character_id: @character.id)
    @game.save
    redirect_to new_journey_path
  end
end
