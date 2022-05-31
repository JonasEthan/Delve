class JourneysController < ApplicationController
  def index
    @journeys = Journey.all
    @run = Run.new          # run instance hier erstellt, damit im Form in journeys/index view erreichbar
  end

  def menu
    @journeys = Journey.find()
  end

  # def completed
  # end

  # def repeat
  # end

  ###

  # def edit
  # end

  # def update
  # end

end
