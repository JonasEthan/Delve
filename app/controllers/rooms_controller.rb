class RoomsController < ApplicationController

  def new
    @room = Room.new
    @run = Run.find(Game.last.id)
    @journey_runs = JourneyRun.where(run_id: @run.id) # = array !!!
    # @journeys = @journey_runs.each { |jr| return jr.journey_id } # =array of journey IDs ?

    @journeys = []
    @journey_runs.each do |journey_run|
      journey_id = journey_run.journey_id
      journey = Journey.find(journey_id)
      @journeys << journey
    end

  end

  def create
    @journey = Journey.find(params[:room][:journey_id])
    @enemy = Enemy.where(disorder_id: @journey.disorder_id) # => array (possibly) because of "where"
    @room = Room.new(journey_id: @journey.id, enemy_id: @enemy.id)
    @room.save
    redirect_to room_path(@room)
  end

  def show
    # @room = Room.find(params[:id])
    # @enemy = Enemy.find() -- Don't need this because of nested routes?
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
