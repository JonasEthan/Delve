class JourneysController < ApplicationController

  # Journeys are seeded - no need to create new one

  def index
    @journeys = Journey.all
    @run = Run.new
    @journey_run = JourneyRun.new
  end

  def menu
  end

  def completed
  end

  def repeat
  end

  ###

  # def edit
  # end

  # def update
  # end

end
