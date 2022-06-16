class PagesController < ApplicationController
  skip_before_action :authenticate_user!# , only: [ :home, :test_fight]

  def home
    @game = Game.new
  end

  def test_fight
    @a_moment_respite = AMomentsRespite.find(params[:respite_id]) if params[:respite_id].present?
    @journey = Journey.find(params[:journey_id]) if params[:journey_id].present? # find the journey that is connected
    if params[:rooms_id].present?
      # checks if the params exists
      @room_ids = params[:rooms_id] # asignes all the parsed ids to the variable
      @db_rooms = Room.where(id: @room_ids) # query for those id in the Rooms table
      @enemys = []
      @db_rooms.each { |room| @enemys << Enemy.find(room.enemy_id) } # finds the enemies from the Enemies table and then pushes them into an array
      @enemys.map do |enemy| # randomizes the stats of the existing enemies
        enemy.health += rand(-10..10)
        enemy.energy += rand(-5..5)
      end
      @disorder = Disorder.find(@enemys[-1].disorder_id) # gets the coresponding disorder
      @player = current_user.present? ? current_user.id : Character.first.id
      @character = Character.find(@player)
      @character.health = params[:health] if params[:health].present?
      @character.energy = params[:energy] if params[:energy].present?
      @player_abilitys = PlayerAbility.all
    else
      @journey.completed = true
      @journey.save
      redirect_to journeys_completed_path
    end
    # @rooms = []
    # @minion = Enemy.where("disorder_id = #{@disorder.id} AND boss = false").first
    # @rooms << @minion
    # @rooms << Enemy.find(7)
    # @rooms << @minion
    # @rooms << Enemy.where("disorder_id = #{@disorder.id} AND boss = true").first if @disorder.name != "Testing"
    # @rooms.map do |room_enemy|
    #   room_enemy.health += rand(-10..10)
    #   room_enemy.energy += rand(-5..5)
    # end
  end

  def respite_room
    @room_ids = params[:rooms_id]
    @disorder = Disorder.find(params[:disorder_id])
    @respite = AMomentsRespite.find(params[:respite_id])
    @player = current_user.present? ? current_user.id : Character.first.id
    @character = Character.find(@player)
    @character.health = params[:health] if params[:health].present?
    @character.energy = params[:energy] if params[:energy].present?
    # raise
  end

  def next_room
    @room_ids = params[:rooms_id]

    @disorder = params[:disorder]
    @character = params[:character]
    @player_ability = params[:player_ability]
    if @rooms.length.positive?
      render :next_room
    else
      redirect_to new_room_path
    end
  end

  # this does not neceserraly work it is just for a reminder how the save action should work
  def update
    # @character = Character.find(current_user.character_id)
    # @character = params[:character]
    # Character.update(@character)
  end

  def loading
  end

  def about
  end

  def team
  end

  def donate
  end

  def dashboard
  end

  def coming_soon
  end
end
