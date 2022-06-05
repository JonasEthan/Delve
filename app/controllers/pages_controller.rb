class PagesController < ApplicationController
  skip_before_action :authenticate_user!# , only: [ :home, :test_fight]

  def home
    @game = Game.new
  end

  def test_fight
    @enemy = Enemy.find(params[:format])
    @enemy.health += rand(-10..10)
    @enemy.energy += rand(-5..5)
    @disorder = Disorder.find(@enemy.disorder_id)
    @character = Character.first
  end

  def loading
  end

  def about
  end

  def team
  end

  def donate
  end
end
