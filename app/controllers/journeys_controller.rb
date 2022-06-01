class JourneysController < ApplicationController

  def new
    @disorders = Disorder.all
    @journey = Journey.new
  end

  def create
    raise
    @disorders = Disorder.all
    @run = Run.new
    @run.game = Game.last #
    @run.save ###

    array = []
    params[:journey][:title] # = this is an array (?)
    params[:journey][:title].each { |title| array << title }
    #
    params[:journey][:title].each do |journey_choice_title|
      @journey = Journey.new
      case journey_choice_title # @disorders accessible within this method?
      when @disorders[1].name then @journey.disorder = @disorders[1].id && @journey.title = @disorders[1].name # ACTUALLY NOT
      when @disorders[2].name then @journey.disorder = @disorders[2].id && @journey.title = @disorders[2].name
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
