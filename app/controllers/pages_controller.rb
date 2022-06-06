class PagesController < ApplicationController
  skip_before_action :authenticate_user!# , only: [ :home, :test_fight]

  def home
    @game = Game.new
  end

  def test_fight
    @room_ids = params[:format].split("/")
    @rooms = []
    @room_ids.each { |id| @rooms << Room.find(id) }
    @enemys = []
    @rooms.each { |room| @enemys << Enemy.find(room.enemy_id) }
    @enemys.map do |enemy|
      enemy.health += rand(-10..10)
      enemy.energy += rand(-5..5)
    end
    @disorder = Disorder.find(@enemys[0].disorder_id)
    @character = Character.first
    @player_ability = PlayerAbility.find(UserAbility.first.player_ability_id)
  end

  def about
  end

  def team
  end

  def donate
  end
end
