class JourneysController < ApplicationController
  def index
    @journeys = Journey.all
    @room = Room.new          # room hier schon "automatisch" erstellt
    # authorize @journey
  end
end
