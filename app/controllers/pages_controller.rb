class PagesController < ApplicationController
  skip_before_action :authenticate_user!# , only: [ :home, :test_fight]

  def home
    @game = Game.new
  end

  def test_fight
    @room_ids = params[:format].split("/")
    @db_rooms = []
    @room_ids.each { |id| @db_rooms << Room.find(id) }
    @enemys = []
    @db_rooms.each { |room| @enemys << Enemy.find(room.enemy_id) }
    @enemys.map do |enemy|
      enemy.health += rand(-10..10)
      enemy.energy += rand(-5..5)
    end
    @disorder = Disorder.find(@enemys[0].disorder_id)
    @character = Character.first
    @player_ability = PlayerAbility.find(UserAbility.first.player_ability_id)

    @rooms = []
    @minion = Enemy.where("disorder_id = #{@disorder.id} AND boss = false")
    @rooms << @minion[0]
    @rooms << Enemy.find(7)
    @rooms << @minion[0]
    @rooms << Enemy.where("disorder_id = #{@disorder.id} AND boss = true").first
    @rooms.map do |room_enemy|
      room_enemy.health += rand(-10..10)
      room_enemy.energy += rand(-5..5)
    end
    raise
  end

  def next_room
    @rooms = params[:rooms]
    @rooms.delete(@rooms.first)
    @disorder = params[:disorder]
    @character = params[:character]
    @player_ability = params[:player_ability]
  end

  # this does not neceserraly work it is just for a reminder how the save action should work
  def update
    # @character = Character.find(current_user.character_id)
    # @character = params[:character]
    # Character.update(@character)
  end

  def about
  end

  def team
  end

  def donate
  end
end
