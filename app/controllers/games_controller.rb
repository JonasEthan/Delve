class GamesController < ApplicationController
  def create
    @game = Game.new
    @character = Character.find(1) # Seeded character with ID = 1
    @game.character = @character
    @game.save
  end
end
