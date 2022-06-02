class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    @game = Game.new
    @character = Character.create(health: 10, energy: 10, attack_damage: 10)
    @character.save
    @game.character = @character
    @game.save
    redirect_to new_journey_path
  end
end
