class JourneysController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @disorders = Disorder.all
    @journey = Journey.new
  end

  def create
    @run = Run.new
    @run.game = Game.last
    @run.save
    params[:journey][:title].each do |disorder_id|
      @journey = Journey.new(disorder_id: disorder_id, title: Disorder.find(disorder_id).name)
      @journey.save
      @journey_run = JourneyRun.new
      @journey_run.run = @run
      @journey_run.journey = @journey
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
