class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @game = Game.new
  end

  def test_fight
    @enemy = Enemy.all.sample
    @enemy.health += rand(-10..10)
    @enemy.energy += rand(-5..5)
    @character = Character.first
  end
end
