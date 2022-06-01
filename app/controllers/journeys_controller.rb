class JourneysController < ApplicationController

  def create
    raise
    @journey_run = JourneyRun.new
    @journey = Journey.new
    @run = Run.new
    @run.game = Game.find(params[:game_id])
    @run.save

    3.times do # array -> .each
      @journey_run = JourneyRun.new
      @journey_run.run = @run
    end

    # case statement --> journey.title => journey.disorder_id = X
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

  def params
  end

end
