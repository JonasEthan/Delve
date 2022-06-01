class JourneysController < ApplicationController

  # Journeys are seeded - no need to create new one

  def index
    @journeys = Journey.all
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
