class RoomsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @room = Room.new
    @run = Run.find(Game.last.id)
    @journey_runs = JourneyRun.where(run_id: @run.id) # = array !!!
    # @journeys = @journey_runs.each { |jr| return jr.journey_id } # =array of journey IDs ?

    @journeys = []
    @journey_runs.each do |journey_run|
      journey_id = journey_run.journey_id
      journey = Journey.find(journey_id)
      @journeys << journey # => array of 2 journeys !!!
    end
  end

  def create
    @journey = Journey.find(params[:room][:journey_id])
    @enemies = Enemy.where(disorder_id: @journey.disorder_id) # => array because of "where"

    @array_of_journey_rooms = []
    @enemies.each do |enemy|
      @room = Room.new(journey_id: @journey.id, enemy_id: enemy.id)
      @room.save
      @array_of_journey_rooms << @room
    end
    redirect_to room_path(@array_of_journey_rooms[0][:id])
    # .sort to make sure last room/enemy is always boss etc.
  end

  def show
    # @room = Room.find(params[:id])
  end

  # def edit
  # end

  # def update
  # end

  private

  def room_params
    params.require(:room).permit(:journey_id)
  end
end


# t.bigint "journey_id", null: false
# t.bigint "enemy_id", null: false
