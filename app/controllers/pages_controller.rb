class PagesController < ApplicationController
  skip_before_action :authenticate_user!# , only: [ :home, :test_fight]

  def home
    @game = Game.new
  end

  def test_fight
    @enemy = Enemy.all.sample
    @enemy.health += rand(-10..10)
    @enemy.energy += rand(-5..5)
    @disorder = Disorder.find(@enemy.disorder_id)
    @character = Character.first
  end

  def about
  end

  def team
  end

  def donate
  end
end
