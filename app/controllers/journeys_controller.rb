class JourneysController < ApplicationController

  def new
    @disorders = Disorder.all
    @journey = Journey.new
  end

  def create
    @run = Run.new
    @run.game = Game.last #
    @run.save ###


    [array of journeys].each do |journey_choice|
      @journey = Journey.new
      case journey_choice.title
      when "Paranoia" then @journey.disorder = @disorders[1] && @journey.title = "Paranoia"
      when "Depression" then @journey.disorder = @disorders[2] && @journey.title = "Depression"
      end
      @journey.save

      @journey_run = JourneyRun.new
      @journey_run.run = @run #
      @journey_run.journey = @journey #
      @journey_run.save ###
    end


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
