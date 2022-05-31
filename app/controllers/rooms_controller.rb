class RoomsController < ApplicationController

  # Rooms are seeded - no need to create new one

  def show
    @room = Room.find(params[:id])
    # @enemy = Enemy.find() -- Don't need this because of nested routes?
  end



  # def edit
  # end

  # def update
  # end
end
