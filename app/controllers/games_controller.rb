class GamesController < ApplicationController
  def create
    @game = Game.new
    @character = Character.find(params[:character_id])
    @game.character = @character
    @game.save
  end
end
