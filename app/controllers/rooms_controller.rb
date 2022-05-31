class RoomsController < ApplicationController

  # Rooms are seeded - no need to create new one

  def show
    @room = Room.find(params[:id])
    # @enemy = Enemy.find()
  end
end
