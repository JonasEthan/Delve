class JourneysController < ApplicationController
  def index
    @journeys = Journey.all
    @run = Run.new          # run instance hier erstellt, damit im Form in journeys/index view erreichbar
  end

end
