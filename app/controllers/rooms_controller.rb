class RoomsController < ApplicationController

  def new
    @room = Room.new
    @run = Run.find(game: Game.last)
    @journey_runs = JourneyRun.where(run_id: @run.id) # =array
    @journeys = @journey_runs.each { |jr| return jr.journey_id } # =array of journey IDs ?
  end

  def create
    @enemies = Enemy.all
    @room = Room.new
    @room.enemy = @enemies. ...

    redirect_to room_path(@room)
  end

  def show
    @room = Room.find(params[:id])
    # @enemy = Enemy.find() -- Don't need this because of nested routes?
  end



  # def edit
  # end

  # def update
  # end

  private

  def room_params
    params.require(:room).permit(...)
  end
end


# t.bigint "journey_id", null: false
# t.bigint "enemy_id", null: false
