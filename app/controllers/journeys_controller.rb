class JourneysController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @disorders = Disorder.all
    @journey = Journey.new
  end

  def create
    raise
    game_array = Game.where(character_id: current_user.character_id)

    @run = Run.new(game_id: Game.find(@game_id).id)
    @run.save
    params[:journey][:title].each do |disorder_id|
      @journey = Journey.new(disorder_id: disorder_id, title: Disorder.find(disorder_id).name)
      @journey.save
      @journey_run = JourneyRun.new(run_id: @run.id, journey_id: @journey.id)
      @journey_run.save
    end
    redirect_to new_room_path
  end

  def menu
  end

  def completed
  end

  def repeat
  end

  # def edit
  # end

  # def update
  # end

  private

  def journey_params
    params.require(:journey).permit(:title)
  end
end
