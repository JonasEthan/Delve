class JourneysController < ApplicationController
  def index
    @journeys = Journey.all
    @run = Run.new          # room hier schon "automatisch" erstellt

  end

end
