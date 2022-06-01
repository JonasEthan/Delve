class JourneyRunsController < ApplicationController
  def create
    @run = Run.new
    @run.game = Game.find(params[:game_id])
    @run.save
    3.times do
      @journey_run = JourneyRun.new
      @journey_run.run = @run
    end
    @journey_run1 = JourneyRun.find(1)
    @journey_run2 = JourneyRun.find(2)
    @journey_run3 = JourneyRun.find(3)
    @journey_run1.journey = journey_run_params[:journey1]
    @journey_run2.journey = journey_run_params[2]
    @journey_run3.journey = journey_run_params[3]

    @journey_run1.save
    @journey_run2.save
    @journey_run3.save

    redirect_to # menu
  end

  private

  def journey_run_params # --> Form in journeys/index
    params.require(:journey_run).permit(:journey1, :journey2, :journey3) # :journey ?
  end
end
